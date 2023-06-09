import {Routes} from "@angular/router";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";

export const authRouting: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sign-in',
                loadComponent: () => import('./pages/sign-in/sign-in.component').then((c)=>c.SignInComponent)
            },
            {
                path: '**',
                redirectTo: 'sign-in',
                pathMatch: "full",
            }
        ]
    }
]