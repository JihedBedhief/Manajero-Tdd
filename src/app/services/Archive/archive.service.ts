import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// archive.model.ts
// archive.model.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Task {
  id: string;
  name: string;
  project: any; // Use a more specific type if possible
  assigned: string;
  description: string;
  dueDate: string;
  status: string;
  comments: string;
  tests: any[]; // Use a more specific type if possible
}

export interface Test {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export interface Archive {
  projects: Project[];
  tasks: Task[];
  tsts: Test[];
}



const BASE_URL ="http://localhost:9090/";



@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private http : HttpClient) { }

  getLimitation():Observable<Archive>{
    return this.http.get<Archive>(BASE_URL+"api/archive");
    
  }}
