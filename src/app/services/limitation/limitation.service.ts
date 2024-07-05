import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class LimitationService {

  constructor(private http : HttpClient) { }

  getLimitation():Observable<any>{
    return this.http.get(BASE_URL+"api/limitation");
    
  }
  addLimitation(limitationdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/limitation",limitationdto);
    
  }

  deleteLimitationById(idLim: any):Observable<any>{
    return this.http.delete(BASE_URL+`api/limitation/${idLim}`);
  }
  updateLimitation(idLim: number, limitationdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/limitation/${idLim}`,limitationdto);
  }}
