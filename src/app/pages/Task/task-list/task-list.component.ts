import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  project: string;
  assigned: string[];
  description: string;
  dueDate: Date;
  status: string;
  comments: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch or initialize the tasks
    this.tasks = [
      {
        name: 'Task 1',
        project: 'Project 1',
        assigned: ['User 1', 'User 2'],
        description: 'This is a sample task description.',
        dueDate: new Date(),
        status: 'In Progress',
        comments: 'These are some comments.'
      },
      {
        name: 'Task 2',
        project: 'Project 2',
        assigned: ['User 3'],
        description: 'This is another task description.',
        dueDate: new Date(),
        status: 'Completed',
        comments: 'These are some more comments.'
      }
      // Add more tasks as needed
    ];
  }
}
