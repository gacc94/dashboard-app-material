import { Component, HostBinding } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
    selector: 'app-root',
    standalone:true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dashbaord-app';

    @HostBinding('class') componentClass: any;

    constructor(public overlayContainer: OverlayContainer) {
    }

    onSetTheme(e: string) {
        this.overlayContainer.getContainerElement().classList.add(e);
        this.componentClass = e;
    }


}
