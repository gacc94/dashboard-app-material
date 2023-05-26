import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {delay, retry} from "rxjs";
import {map, pluck} from "rxjs/operators";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-prueba',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatPaginatorModule,],
    templateUrl: './prueba.component.html',
    styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit{

    private readonly http: HttpClient = inject(HttpClient);
    fullData !: Array<any>;

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

    ngOnInit() {
        this.http.get('assets/data/E001-00000836_1.json').pipe(
            delay(5000),
            pluck('doc', 'FACUPLOADMQ', 'Factura'),
            map((res) => (<Array<any>>res)[0]),
            pluck('ItemFactura'),
            map((res) => (<Array<any>>res)),
            retry(2),
        ).subscribe({
            next: ( value ) => {

                value.sort(this.compareFn)

                this.fullData = value;
            },
            error: (err: HttpErrorResponse) =>  {
                console.log(err);
            }
        })
    }

    compareFn = (a: any, b: any): number  => {

        return a.NumGuiaItem === b.NumGuiaItem
            ? a.NumeroItemOC.localeCompare(b.NumeroItemOC)
            : a.NumGuiaItem.localeCompare(b.NumGuiaItem)

        // if ( (a.NumGuiaItem > b.NumGuiaItem) ) {
        //     return 1;
        // }
        // if ( a.NumGuiaItem < b.NumGuiaItem ) {
        //     return -1;
        // }
        // if ( a.NumeroItemOC > b.NumeroItemOC) {
        //     return 1;
        // }
        // if ( a.NumeroItemOC < b.NumeroItemOC) {
        //     return -1;
        // }
        // return 0;

    }

}
/*
* ========================================
*                PRIMER METODO
* ========================================
* */
// const compareGuia = a.NumGuiaItem.localeCompare(b.NumGuiaItem);
// const compareOC = a.NumeroItemOC.localeCompare(b.NumeroItemOC);
//
// return (compareGuia === 0) ? compareOC : compareGuia ;

/*
* ========================================
*               SEGUNDO METODO
* ========================================
* */
// return a.NumGuiaItem === b.NumGuiaItem
//     ? a.NumeroItemOC.localeCompare(b.NumeroItemOC)
//     : a.NumGuiaItem.localeCompare(b.NumGuiaItem)
// //
