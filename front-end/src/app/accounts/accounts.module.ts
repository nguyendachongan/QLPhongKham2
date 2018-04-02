import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { NgIf } from '@angular/common';

const accountsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AccountsComponent
  }
]);

@NgModule({
  imports: [
    accountsRouting
  ],
  declarations: [
    AccountsComponent,
    NgForOf,
    NgIf
  ],
  providers: []
})
export class AccountsModule {}
