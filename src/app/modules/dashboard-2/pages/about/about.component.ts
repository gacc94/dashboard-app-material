import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {map, pluck} from "rxjs/operators";
import {TableComponent} from "../../components/table/table.component";

type a = ReturnType<any>;

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TableComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

    private readonly http: HttpClient = inject(HttpClient);
    data!: Array<any>;
    constructor() {}

    ngOnInit() {
        this.http.get('assets/data/E001-00000836_1.json').pipe(
            pluck<any>('doc', 'FACUPLOADMQ','Factura'),
            map<any, any>((resp: Array<any>) => resp[0]),
            pluck('ItemFactura'),
            // map<any, any>( this.order ),
        ).subscribe({
            next: (value) => {
                // this.data = (<Array<any>>value)[0];
                this.data = value;
                this.data.sort( (a, b) => {
                    // console.log(typeof a.NumGuiaItem);
                    let first= <Number>a.NumGuiaItem;
                    let second = Number(b.NumGuiaItem);
                    console.log(typeof first);
                    return  a.NumGuiaItem.localeCompare(b.NumGuiaItem);

                })
                console.log(this.data);
            }
        })
    }

    order(resp: Array<any>) {
        resp.sort();
    }


}
