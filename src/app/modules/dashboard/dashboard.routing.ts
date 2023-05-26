import {Routes} from "@angular/router";
import {DashboardLayoutComponent} from "./layout/dashboard-layout/dashboard-layout.component";
import {StudentComponent} from "./pages/student/student.component";

export const dashboardRouting: Routes = [
    {
        path: '',
        title: 'Dashboard',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'student',
                component: StudentComponent,
            }
        ]
    }
];