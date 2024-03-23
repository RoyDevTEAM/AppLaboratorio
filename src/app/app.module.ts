import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Importa MatSnackBarModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
<<<<<<< HEAD
<<<<<<< HEAD
import { HomeComponent } from './teacher/components/home/home.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> d0945690fca2225b0b02e30470655bfcfb8f2fee
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> d0945690fca2225b0b02e30470655bfcfb8f2fee

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
    LaboratoryManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
<<<<<<< HEAD
    BrowserAnimationsModule, // Agrega BrowserAnimationsModule aquí
    ReactiveFormsModule,
    MatSnackBarModule, // Agrega MatSnackBarModule aquí
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig)
=======
    BrowserAnimationsModule
>>>>>>> d0945690fca2225b0b02e30470655bfcfb8f2fee
=======
    BrowserAnimationsModule
>>>>>>> d0945690fca2225b0b02e30470655bfcfb8f2fee
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
