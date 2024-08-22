import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:9090/api/test';
  private apiUrl2 = 'http://localhost:9090/api/task';


  constructor(private http: HttpClient) { }

  getTestKPIs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Kpis`);
  }

  getTaskKPIs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/Kpis`);
  }
  getAllKPIs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/AllKpis`);
  }

  getlineKPIs(entity: string): Observable<any> {
    const params = new HttpParams().set('entity', entity);
    return this.http.get<any>(this.apiUrl, { params });
  }


}
