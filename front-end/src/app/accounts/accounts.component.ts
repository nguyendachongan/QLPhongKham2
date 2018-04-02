import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AccountsService } from '../shared/services/accounts.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: []
})
export class AccountsComponent implements OnInit {
  public accounts;
  public employees;
  public account;
  breadcrumbs = 'Accounts';

  constructor(private _accountsService: AccountsService) {
  }

  ngOnInit() {
    this.getAccounts();
    this.getEmployees();
  }

  getAccounts() {
    this._accountsService.getAccounts().subscribe(
      data =>  this.accounts = data);
  }
  getEmployees() {
    this._accountsService.getEmployees().subscribe(
      data =>  this.employees = data);
  }

}
