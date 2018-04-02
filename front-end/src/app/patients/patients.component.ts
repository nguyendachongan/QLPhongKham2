import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PatientsService } from '../shared/services/patients.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: []
})
export class PatientsComponent implements OnInit {
  public patients;
  breadcrumbs = 'Patients';

  constructor(private _patientsService: PatientsService) {
  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
     this._patientsService.getPatients().subscribe(
          data =>  this.patients = data);
  }

}
