import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from "../../components/sidenav/sidenav.component";

@Component({
  selector: 'app-dashboard2-layout',
  standalone: true,
    imports: [CommonModule, SidenavComponent],
  templateUrl: './dashboard2-layout.component.html',
  styleUrls: ['./dashboard2-layout.component.scss']
})
export class Dashboard2LayoutComponent {

}
