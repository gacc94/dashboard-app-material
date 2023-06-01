import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [
        CommonModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatDividerModule],
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

}
