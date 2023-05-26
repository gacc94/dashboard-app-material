import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {map, pluck} from "rxjs/operators";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
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
                    if((a.NumGuiaItem > b.NumGuiaItem) || (a.NumeroItemOC > b.NumeroItemOC)  ) {
                        return 1;
                    }
                    if ((a.NumGuiaItem < b.NumGuiaItem) || (a.NumeroItemOC < b.NumeroItemOC)) {
                        return  -1;
                    }
                    return  0 ;
                })
                console.log(this.data);
            }
        })
    }

    order(resp: Array<any>) {
        resp.sort();
    }


}
