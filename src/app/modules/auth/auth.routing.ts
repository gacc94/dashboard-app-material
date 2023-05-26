import {Routes} from "@angular/router";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";

export const authRouting: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
    }
]