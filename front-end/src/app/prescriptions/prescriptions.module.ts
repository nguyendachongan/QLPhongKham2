import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { PrescriptionsComponent } from './prescriptions.component';

const patientRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PrescriptionsComponent
  }
]);

@NgModule({
  imports: [
    patientRouting
  ],
  declarations: [
    PrescriptionsComponent,
    NgForOf
  ],
  providers: []
})
export class PrescriptionsModule {}
