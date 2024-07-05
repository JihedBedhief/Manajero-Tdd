import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})
export class WhyService {

  constructor(private http : HttpClient) { }

  getWhy():Observable<any>{
    return this.http.get(BASE_URL+"api/why");
    
  }
  addWhy(whydto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/why",whydto);
    
  }

  deleteWhyById(idWhy : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/why/${idWhy}`);
  }
  updateWhy(idWhy : number, whydto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/why/${idWhy}`,whydto);
  }}
