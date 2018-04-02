import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { PatientsComponent } from './patients.component';

const patientRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PatientsComponent
  }
]);

@NgModule({
  imports: [
    patientRouting
  ],
  declarations: [
    PatientsComponent,
    NgForOf
  ],
  providers: []
})
export class PatientsModule {}
