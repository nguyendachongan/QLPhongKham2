import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DrugsService } from '../shared/services/drugs.service';
import {TypeOfDrugsService} from '../shared/services/type_of_drugs.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drugs.component.html',
  styleUrls: []
})
export class DrugsComponent implements OnInit {
  public drugs;
  public drug;
  public types;
  public search = '';
  constructor(private _drugsService: DrugsService, private _typesService: TypeOfDrugsService) {
  }

  ngOnInit() {
    this.getDrugs();
    this.getTypes();
    this.drug = {'Name': null, 'Description': null, 'Price': null, 'TypeID': null} ;
  }

  getDrugs() {
    this._drugsService.getDrugs().subscribe(
      data =>  this.drugs = data);
  }

  getTypes() {
    this._typesService.getTypeOfDrugs().subscribe(
      data =>  this.types = data);
  }
  onSelect(id: number): void {
    this._drugsService.getDrug(id).subscribe(
      data =>  this.drug = data);
  }
  save() {
    this._drugsService.postDrug(this.drug);
  }
}
