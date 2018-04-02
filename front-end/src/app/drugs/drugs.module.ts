import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { DrugsComponent } from './drugs.component';

const drugRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: DrugsComponent
  }
]);

@NgModule({
  imports: [
    drugRouting
  ],
  declarations: [
    DrugsComponent,
    NgForOf
  ],
  providers: []
})
export class DrugsModule {}
