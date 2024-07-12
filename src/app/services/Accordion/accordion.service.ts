import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor(private http : HttpClient) { }

  getAccordion():Observable<any>{
    return this.http.get(BASE_URL+"api/accordion");
    
  }
  addAccordion(accordiondto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/accordion",accordiondto);
    
  }
  deleteAccordionById(idAccordion : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/accordion/${idAccordion}`);
  }
  updateAccordion(idAccordion: number, accordiondto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/accordion/${idAccordion}`,accordiondto);
  }
  getAccordionById(idAccordion : any):Observable<any>{
    return this.http.get(BASE_URL+`api/accordion/${idAccordion}`
    )
  }
}
