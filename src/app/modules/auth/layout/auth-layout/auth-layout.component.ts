import {Component, OnInit} from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {LocalStorageService} from "@services/local-storage.service";
import {RouterModule} from "@angular/router";

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './auth-layout.component.html',
    styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent  implements OnInit{

    constructor(
        private localStorage: LocalStorageService,
    ) {}

    ngOnInit() {

        const arr =  Array.from({length: 169}, (_, i: number) => i);

        console.log( arr.length - (169 % 10) );
        console.log( Boolean(170 % 10) );
    }

}
