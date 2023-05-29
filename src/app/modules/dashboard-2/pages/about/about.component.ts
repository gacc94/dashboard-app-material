import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {BaseChartDirective, NgChartsConfiguration, NgChartsModule} from "ng2-charts";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    providers: [{provide: NgChartsConfiguration, useValue: {generateColors: false}}]
})
export class AboutComponent {

    private readonly http: HttpClient = inject(HttpClient);

}
