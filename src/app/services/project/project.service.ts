import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface ProjectWithTaskCount {
  name: string;
  taskCount: number;
}

const BASE_URL ="http://localhost:9090/";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get(BASE_URL+"api/project");
  }

  AddProject(ProjectDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/project",ProjectDto);
  }


  deleteProjectById(id: any):Observable<any>{
    return this.http.delete(BASE_URL+`api/project/${id}`);
  }

  updateProject(id: number, projectdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/project/${id}`,projectdto);
  }


  getProjectsWithTaskCounts(): Observable<ProjectWithTaskCount[]> {
    return this.http.get<ProjectWithTaskCount[]>(BASE_URL+"api/project/with-task-counts");
  }

}
