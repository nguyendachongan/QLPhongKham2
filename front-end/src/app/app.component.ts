import { Component, OnInit } from '@angular/core';
import {PatientsService} from './shared/services/patients.service';
import {Observable} from 'rxjs/Observable';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hospital Management';
  breadcrumbs = 'Hospital Dashboard';
  // public patients;
  constructor(private _patientsService: PatientsService) {
  }
  ngOnInit() {
    // this.getPatients();
  }

}
