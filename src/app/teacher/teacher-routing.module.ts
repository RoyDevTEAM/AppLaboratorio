import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SoftwareRequestComponent } from './components/software-request/software-request.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'notifications', component: NotificationsComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'software-request', component: SoftwareRequestComponent },
      { path: 'teacher-dashboard', component: TeacherDashboardComponent },
      { path: '', redirectTo: 'teacher-dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
