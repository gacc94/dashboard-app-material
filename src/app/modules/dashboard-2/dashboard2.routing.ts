import {Routes} from "@angular/router";
import {Dashboard2LayoutComponent} from "./layout/dashboard2-layout/dashboard2-layout.component";
import {MainComponent} from "./pages/main/main.component";

export const dashboard2Routing: Routes =[
    {
        path: '',
        component: Dashboard2LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent,
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
            },
            {
                path: 'prueba',
                loadComponent: () => import('./pages/prueba/prueba.component').then(c => c.PruebaComponent),
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]