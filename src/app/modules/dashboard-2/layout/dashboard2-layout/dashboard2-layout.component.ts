import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from "../../components/aside/aside.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable, tap} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
    selector: 'app-dashboard2-layout',
    standalone: true,
    imports: [CommonModule, AsideComponent, MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, RouterOutlet],
    templateUrl: './dashboard2-layout.component.html',
    styleUrls: ['./dashboard2-layout.component.scss']
})
export class Dashboard2LayoutComponent {
    private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);


    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
        .pipe(
            tap(console.log),
            map(result => result.matches),
            shareReplay(),
            tap(console.log)
        );

    ngOnInit() {
        // const obs$ =  of({data: 1});
        // const obs2$ =  from([{data: 1}],);
        // obs$.subscribe(console.log);
        // obs2$.subscribe(console.log);
    }
}
