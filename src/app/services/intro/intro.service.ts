import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor(private http : HttpClient) { }

  getIntro():Observable<any>{
    return this.http.get(BASE_URL+"api/intro");
    
  }
  addIntro(introdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/intro",introdto);
    
  }

  deleteIntroById(idIntro : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/intro/${idIntro}`);
  }
  updateIntro(idIntro: number, introdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/intro/${idIntro}`,introdto);
  }}
