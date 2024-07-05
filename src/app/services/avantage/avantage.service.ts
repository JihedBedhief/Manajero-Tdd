import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class AvantageService {

  constructor(private http : HttpClient) { }

  getAvantage():Observable<any>{
    return this.http.get(BASE_URL+"api/avantage");
    
  }
  addAvantage(avantagedto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/avantage",avantagedto);
    
  }

  deleteAvantageById(idAvantage : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/avantage/${idAvantage}`);
  }
  updateAvantage(idAvantage: number, avantagedto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/avantage/${idAvantage}`,avantagedto);
  }}
