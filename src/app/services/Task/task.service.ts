import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:9090/";
export interface Test {
  id: number;
  description: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  status: 'completed' | 'just-started' | 'in-progress';
  tests: Test[];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http : HttpClient) { }
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      status: 'just-started',
      tests: [
        { id: 1, description: 'Test 1', completed: false },
        { id: 2, description: 'Test 2', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'in-progress',
      tests: [
        { id: 1, description: 'Test 1', completed: true },
        { id: 2, description: 'Test 2', completed: false },
      ],
    },
    {
      id: 3,
      title: 'Task 3',
      status: 'completed',
      tests: [
        { id: 1, description: 'Test 1', completed: true },
        { id: 2, description: 'Test 2', completed: true },
      ],
    },
  ];

  getTask():Observable<any>{
    return this.http.get(BASE_URL+"api/task");
    
  }
  addTask(taskdto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/task",taskdto);
    
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


  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(task => task.status === 'completed').length;
  }

  getInProgressTasks(): number {
    return this.tasks.filter(task => task.status === 'in-progress').length;
  }

  getJustStartedTasks(): number {
    return this.tasks.filter(task => task.status === 'just-started').length;
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