import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = 'http://localhost:9090/api/test';

  constructor(private http: HttpClient) { }

  getTestKPIs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Kpis`);
  }

}
