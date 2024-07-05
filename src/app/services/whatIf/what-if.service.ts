import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})
export class WhatIfService {

  constructor(private http : HttpClient) { }

  getWhatIf():Observable<any>{
    return this.http.get(BASE_URL+"api/whatif");
    
  }
  addWhatIf(whatIfdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/whatif",whatIfdto);
    
  }

  deleteWhatIfById(idWhatIf : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/whatif/${idWhatIf}`);
  }
  updateWhatIf(idWhatIf : number, whatIfdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/whatif/${idWhatIf}`,whatIfdto);
  }}
