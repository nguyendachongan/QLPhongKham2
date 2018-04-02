import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrescriptionsService {

  private Url = 'http://localhost:6500/Service1.svc/';

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getPrescriptions(): Observable<any[]> {
    const url = `${this.Url}/getAllExaminationResults/`;
    return this.http.get<any[]>(url);
  }
  //
  // getPrescription(id: number): Observable<any> {
  //   const url = `${this.Url}/getOneDrug?id=${id}`;
  //   return this.http.get<any>(url);
  // }
}
