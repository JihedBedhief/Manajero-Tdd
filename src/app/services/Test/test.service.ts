import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http : HttpClient) { }

  getTest():Observable<any>{
    return this.http.get(BASE_URL+"api/test");
    
  }
  addTest(testDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/test",testDto);
    
  }
  getTestById(idTest : any):Observable<any>{
    return this.http.get(BASE_URL+`api/test/${idTest}`
    )
  }
  deleteTestById(idTest : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/test/${idTest}`);
  }
  updateTest(idTest: number, testDto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/test/${idTest}`,testDto);
  }
}
