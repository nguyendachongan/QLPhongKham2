import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PatientsComponent} from './patients/patients.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DrugsComponent} from './drugs/drugs.component';
import {AccountsComponent} from './accounts/accounts.component';
import {PrescriptionsComponent} from './prescriptions/prescriptions.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'drugs',
    component: DrugsComponent
  },
  {
    path: 'prescriptions',
    component: PrescriptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
