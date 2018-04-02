import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PrescriptionsService } from '../shared/services/prescriptions.service';


@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: []
})
export class PrescriptionsComponent implements OnInit {
  public prescriptions;
  breadcrumbs = 'Prescriptions';
  constructor(private _prescriptionsService: PrescriptionsService) {
  }

  ngOnInit() {
    this.getPrescriptions();
  }

  getPrescriptions() {
    this._prescriptionsService.getPrescriptions().subscribe(
      data =>  this.prescriptions = data);
  }

}
