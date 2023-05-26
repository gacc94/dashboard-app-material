import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay, tap} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, ToolbarComponent, MatSidenavModule, SidenavComponent, MatButtonModule, MatIconModule, MatToolbarModule],
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent implements OnInit{

    isWeb$: Observable<any> = new Observable();

    constructor(
        private breakpointObserver: BreakpointObserver,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.isWeb$ = this.breakpointObserver.observe(Breakpoints.Small).pipe(
            map(result => result.matches),
            shareReplay(),
        );


        this.breakpointObserver.observe(Breakpoints.Small).subscribe({
            next: (value) => {
                console.log(value)
                console.log('subs',value.breakpoints);
            }
        });
    }

}
