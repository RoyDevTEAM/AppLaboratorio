import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LaboratoryManagementComponent } from './components/laboratory-management/laboratory-management.component';
import { SubjectManagementComponent } from './components/subject-management/subject-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'laboratory-management', component: LaboratoryManagementComponent },
      { path: 'subject-management', component: SubjectManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
