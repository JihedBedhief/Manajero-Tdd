import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task,Test } from '../../pages/Models/Task';



const BASE_URL ="http://localhost:9090/";


export interface ColabWithTaskCount {
  assigned: string;
  taskCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  constructor(private http : HttpClient) { }
  tasks: Task[] = [
  ];

  getTask():Observable<any>{
    return this.http.get(BASE_URL+"api/task");
    
  }
  addTask(taskdto:any,tests:any):Observable<any>{
    return this.http.post(BASE_URL+`api/task/${tests}`,taskdto);
    
  }
  deleteTaskById(idTask : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/task/${idTask}`);
  }
  updateTask(idTask: number, taskdto : any):Observable<any>{
    return this.http.put(BASE_URL+`api/task/${idTask}`,taskdto);
  }
  getTaskById(idTask : any):Observable<any>{
    return this.http.get(BASE_URL+`api/task/${idTask}`
    )
  }
  getProjectsWithTaskCounts(): Observable<ColabWithTaskCount[]> {
    return this.http.get<ColabWithTaskCount[]>(BASE_URL+"api/task/with-task-counts");
  }

  getTaskByProjectId(id:string):Observable<Task[]>{
    return this.http.get<Task[]>(BASE_URL+`api/task/tasks/${id}`)
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(task => task.status === 'done').length;
  }

  getInProgressTasks(): number {
    return this.tasks.filter(task => task.status === 'in Progress').length;
  }

  getJustStartedTasks(): number {
    return this.tasks.filter(task => task.status === 'To do').length;
  }

  getTotalTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.length, 0);
  }

  getCompletedTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.filter(test => test.completed).length, 0);
  }

  getInProgressTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.filter(test => !test.completed).length, 0);
  }
}