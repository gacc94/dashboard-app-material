import {Routes} from "@angular/router";
import {Dashboard2LayoutComponent} from "./layout/dashboard2-layout/dashboard2-layout.component";

export const dashboard2Routing: Routes =[
    {
        path: '',
        component: Dashboard2LayoutComponent,
        children: [
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
            }
        ]
    }
]