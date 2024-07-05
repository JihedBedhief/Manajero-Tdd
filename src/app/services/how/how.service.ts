import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})
export class HowService {

  constructor(private http : HttpClient) { }

  getHow():Observable<any>{
    return this.http.get(BASE_URL+"api/how");
    
  }
  addHow(howdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/how",howdto);
    
  }

  deleteHowById(idHow : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/how/${idHow}`);
  }
  updateHow(idHow: number, howdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/how/${idHow}`,howdto);
  }}
