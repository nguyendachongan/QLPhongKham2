import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PatientsService } from '../shared/services/patients.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: []
})
export class PatientsComponent implements OnInit {
  public patients;
  public patient;
  public pod;
  breadcrumbs = 'Patients';

  constructor(private _patientsService: PatientsService, private alerts: AlertsService) {
  }

  ngOnInit() {
    this.getPatients();
    this.patient = {'IdentifyCard': null, 'FirstName': null, 'MiddleName': null, 'LastName': null, 'Phone': null, 'Gender': 1,
      'Address': null} ;
  }

  getPatients() {
     this._patientsService.getPatients().subscribe(
          data =>  this.patients = data);
  }
  addPatientOfDay(id: number): void {
      this._patientsService.addPatientOfDay(id).toPromise()
        .then(
        data =>  {
          this.pod = data;
          this.alerts.setDefaults('timeout', 10);
          this.alerts.setMessage('Number:' + this.pod.Number + '\n' + 'Room: ' + this.pod.Room, 'success');
        });
  }
  save() {
    this._patientsService.addPatient(this.patient).toPromise()
      .then(
      data =>  {
        this.pod = data;
        this.alerts.setDefaults('timeout', 10);
        this.alerts.setMessage('Number:' + this.pod.Number + '\n' + 'Room: ' + this.pod.Room, 'success');
      });
    this.patient = {'IdentifyCard': null, 'FirstName': null, 'MiddleName': null, 'LastName': null, 'Phone': null, 'Gender': 1,
      'Address': null} ;
  }
}
