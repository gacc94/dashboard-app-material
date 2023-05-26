import {Component, inject, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {from, Observable, of, tap} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DragDropComponent} from "../drag-drop/drag-drop.component";
import {FormComponent} from "../form/form.component";
import {MatRippleModule} from "@angular/material/core";
import {AsideComponent} from "../aside/aside.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        DashboardComponent,
        DragDropComponent,
        FormComponent,
        MatRippleModule,
        NgOptimizedImage,
        AsideComponent,
        RouterOutlet
    ]
})
export class SidenavComponent implements OnInit{
    private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);



    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
        .pipe(
            tap(console.log),
            map(result => result.matches),
            shareReplay(),
            tap(console.log)
        );

    ngOnInit() {
        const obs$ =  of({data: 1});
        const obs2$ =  from([{data: 1}],);
        obs$.subscribe(console.log);
        obs2$.subscribe(console.log);
    }
}
