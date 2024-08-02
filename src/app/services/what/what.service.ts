import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})
export class WhatService {


  constructor(private http : HttpClient) { }

  getWhat():Observable<any>{
    return this.http.get(BASE_URL+"api/what");
    
  }
  addWhat(whatdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/what",whatdto);
    
  }
  getTask():Observable<any>{
    return this.http.get(BASE_URL+"api/task");
    
  }

  deleteWhatById(idWhat : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/what/${idWhat}`);
  }
  updateWhat(idWhat : number, whatdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/what/${idWhat}`,whatdto);
  }

}
