import {Component, HostBinding, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from "../../components/aside/aside.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {BehaviorSubject, Observable, Observer, tap} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormBuilder, FormsModule} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {ThemeService} from '@services/theme.service';

@Component({
    selector: 'app-dashboard2-layout',
    standalone: true,
    imports: [
        CommonModule,
        AsideComponent,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterOutlet,
        MatSlideToggleModule,
        FormsModule
    ],
    templateUrl: './dashboard2-layout.component.html',
    styleUrls: ['./dashboard2-layout.component.scss']
})
export class Dashboard2LayoutComponent implements OnInit{
    private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
    private readonly fb: FormBuilder = inject(FormBuilder);
    private themeService = inject(ThemeService);


    @HostBinding('class') componentClass: any ;
    isDarkTheme: boolean = false;
    isDarkTheme$= this.themeService.isDarkTheme$;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
        .pipe(
            tap(console.log),
            map(result => result.matches),
            shareReplay(),
            tap(console.log)
        );

    constructor(private overlayContainer: OverlayContainer) {}

    ngOnInit() {
        // const obs$ =  of({data: 1});
        // const obs2$ =  from([{data: 1}],);
        // obs$.subscribe(console.log);
        // obs2$.subscribe(console.log);
        this.fb.group({
            toggle: [true],
        })

        this.isDarkTheme$.subscribe({
            next: (value: boolean) => {
                console.log('is value theme =>', value);
                if ( value ) {
                    this.componentClass = 'light-theme';
                    this.overlayContainer.getContainerElement().classList.remove('dark-theme');
                    this.overlayContainer.getContainerElement().classList.add('light-theme');
                } else {
                    this.componentClass = 'dark-theme';
                    this.overlayContainer.getContainerElement().classList.remove('light-theme');
                    this.overlayContainer.getContainerElement().classList.add('dark-theme');
                }
            }
        })

        this.arrayTest(1692);
    }

    onSwitchTheme(event: any) {
        this.themeService.setTheme(this.isDarkTheme);
    }

    arrayTest(num: number) {

        const newArr = Array.from<string, number>(
            {length: (Math.ceil(num / 10))},
            (_, n: number): number => (n));

        const mySet = new Set('');
        const myMap = new Map<string, string>();
        const like: ArrayLike<string> = {length: 2};

        const obj = {x: 1, y: 2}
        const spread = {...obj};
        obj.y = 4;

        console.log({obj, spread})

        let start = 10;
        const [slice] = newArr.slice(-1);
        console.log(slice)

        /*
       * ========================================
       *        ARRAY METHOD
       * ========================================
       * */
        const rest = (newArr.length % 10);
        const val = Math.floor(newArr.length / 10) * 10 ;
        const lastIndex = val + rest;
        const lastArr = newArr.slice(170, lastIndex);
        console.log( newArr )
        console.log( lastArr , newArr.length );

    }

}
