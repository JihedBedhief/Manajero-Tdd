import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadServiceService {

  private apiUrl = 'http://localhost:9090/api/ocr/upload';

  constructor(private http: HttpClient) { }

  extractTextFromImage(file: File, testName: string): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('testName', testName);

    return this.http.post<string>(this.apiUrl, formData, { responseType: 'text' as 'json' });
  }
}