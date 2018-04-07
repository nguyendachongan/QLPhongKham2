import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';

import {MenuComponent} from './shared/layout/menu/menu.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BreadcrumbsComponent} from './shared/layout/breadcrumbs/breadcrumbs.component';


import { AppComponent } from './app.component';
import {DrugsComponent} from './drugs/drugs.component';
import {PatientsComponent} from './patients/patients.component';
import {AccountsComponent} from './accounts/accounts.component';
import {PrescriptionsComponent} from './prescriptions/prescriptions.component';


import {DrugsService} from './shared/services/drugs.service';
import {PatientsService} from './shared/services/patients.service';
import {AccountsService} from './shared/services/accounts.service';
import {PrescriptionsService} from './shared/services/prescriptions.service';
import {TypeOfDrugsService} from './shared/services/type_of_drugs.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    PatientsComponent,
    DrugsComponent,
    AccountsComponent,
    PrescriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    AlertsModule.forRoot()
  ],
  providers: [PatientsService, DrugsService, AccountsService, PrescriptionsService, TypeOfDrugsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

