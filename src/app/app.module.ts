import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReservationComponent } from './teacher/components/reservation/reservation.component';
import { SoftwareRequestComponent } from './teacher/components/software-request/software-request.component';
import { TeacherDashboardComponent } from './teacher/components/teacher-dashboard/teacher-dashboard.component';
import { NotificationsComponent } from './teacher/components/notifications/notifications.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/components/user-management/user-management.component';
import { SubjectManagementComponent } from './admin/components/subject-management/subject-management.component';
import { LaboratoryManagementComponent } from './admin/components/laboratory-management/laboratory-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ReservationComponent,
    SoftwareRequestComponent,
    TeacherDashboardComponent,
    NotificationsComponent,
    DashboardComponent,
    UserManagementComponent,
    SubjectManagementComponent,
    LaboratoryManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
