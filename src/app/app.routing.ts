import { Routes } from '@angular/router';

export const appRouting: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.routing').then((m)=>m.dashboardRouting),
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routing').then((m) => m.authRouting),
        // loadComponent: () => import('./modules/auth/layout/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),

    },
    {
        path: 'dashboard2',
        loadChildren: () => import('./modules/dashboard-2/dashboard2.routing').then(m => m.dashboard2Routing),
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
    // {
    //     path: '**',
    //     redirectTo: 'home',
    //     pathMatch: 'full',
    // }
];
