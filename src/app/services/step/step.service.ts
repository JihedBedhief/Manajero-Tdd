import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private http : HttpClient) { }

  getStep():Observable<any>{
    return this.http.get(BASE_URL+"api/step");
    
  }
  addStep(stepDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/step",stepDto);
    
  }
  deleteStepById(idStep : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/step/${idStep}`);
  }
}
