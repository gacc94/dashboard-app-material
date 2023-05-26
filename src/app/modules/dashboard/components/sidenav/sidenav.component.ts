import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [CommonModule, MatDividerModule, MatButtonModule, MatIconModule],
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

}
