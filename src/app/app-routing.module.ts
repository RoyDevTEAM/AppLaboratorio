import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LaboratoryManagementComponent } from './admin/components/laboratory-management/laboratory-management.component';
import { SubjectManagementComponent } from './admin/components/subject-management/subject-management.component';
import { UserManagementComponent } from './admin/components/user-management/user-management.component';
import { TeacherDashboardComponent } from './teacher/components/teacher-dashboard/teacher-dashboard.component';
import { NotificationsComponent } from './teacher/components/notifications/notifications.component';
import { ReservationComponent } from './teacher/components/reservation/reservation.component';
import { SoftwareRequestComponent } from './teacher/components/software-request/software-request.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { HomeComponent } from './teacher/components/home/home.component';
import { TeacherGuard } from './core/guards/teacher.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'teacher', component: TeacherDashboardComponent ,canActivate: [AuthGuard,TeacherGuard]},
  { path: 'home', component: HomeComponent},

  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/laboratory-management', component: LaboratoryManagementComponent, canActivate: [AuthGuard,AdminGuard] },
  { path: 'admin/subject-management', component: SubjectManagementComponent, canActivate: [AuthGuard,AdminGuard] },
  { path: 'admin/user-management', component: UserManagementComponent, canActivate: [AuthGuard,AdminGuard] },
  { path: 'teacher/teacher-dashboard', component: TeacherDashboardComponent ,canActivate: [ AuthGuard,TeacherGuard]},
  { path: 'teacher/notifications', component: NotificationsComponent,canActivate: [AuthGuard,TeacherGuard] },
  { path: 'teacher/reservation', component: ReservationComponent,canActivate: [AuthGuard,TeacherGuard] },
  { path: 'teacher/software-request', component: SoftwareRequestComponent ,canActivate: [AuthGuard,TeacherGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
