import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {CardComponent} from "../../components/card/card.component";
import {Observable} from "rxjs";
import {ChartsComponent} from "../../components/charts/charts.component";

export interface Matches {
    columns: number;
    miniCard: { cols: number; rows: number; };
    chart: {cols: number, rows: number},
    table: {cols: number, rows: number},
}

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        CardComponent,
        ChartsComponent,
    ],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
    private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

    /** Based on the screen size, switch from standard to one column per row */
    public cardLayout: Observable<any> = new Observable<any>();

    ngOnInit() {
        this.cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
            map(({matches}) => {
                if (matches) {
                    return {
                        columns: 1,
                        miniCard: {cols: 1, rows: 1},
                        chart: {cols: 1, rows: 2},
                        table: {cols: 1, rows: 4},
                    };
                }

                return {
                    columns: 4,
                    miniCard: {cols: 1, rows: 1},
                    chart: {cols: 2, rows: 2},
                    table: {cols: 4, rows: 4},
                };
            })
        );
    }

}
