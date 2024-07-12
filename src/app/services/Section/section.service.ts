import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http : HttpClient) { }

  getSection():Observable<any>{
    return this.http.get(BASE_URL+"api/section");
    
  }
  addSection(sectionDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/section",sectionDto);
    
  }
  getSectionById(idSection : any):Observable<any>{
    return this.http.get(BASE_URL+`api/section/${idSection}`
    )
  }

  deleteSectionById(idSection : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/section/${idSection}`);
  }
  updateSection(idSection: number, sectionDto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/section/${idSection}`,sectionDto);
  }
}
