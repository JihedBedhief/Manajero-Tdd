import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
//import { NbThemeModule, NbLayoutModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { NbDateService } from '@nebular/theme';

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
  selector: 'ngx-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  taskItems: any[] = [];
  taskForm: FormGroup;
  min: Date;
  max: Date;
  task: Task;  // Declare the task property

  constructor(private fb: FormBuilder, protected dateService: NbDateService<Date>) {
    //this.min = this.dateService.addDay(this.dateService.today(), -5);
    //this.max = this.dateService.addDay(this.dateService.today(), 5);
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      'Due Date': [''],
      content: this.fb.array([this.fb.control('')]),
    });

    // Initialize the task property with some data
    this.task = {
      name: 'Task 1',
      project: 'Project 1',
      assigned: ['User 1', 'User 2'],
      description: 'This is a sample task description.',
      dueDate: new Date(),
      status: 'In Progress',
      comments: 'These are some comments.'
    };
  }

  get content(): FormArray {
    return this.taskForm.get('content') as FormArray;
  }

  addContentField(): void {
    this.content.push(this.fb.control(''));
  }

  onSubmit(): void {
    // Update the task object with form data if needed
    this.task = {
      name: this.taskForm.get('title').value,
      project: 'Project 1',
      assigned: ['User 1', 'User 2'],
      description: this.taskForm.get('content').value.join(', '),
      dueDate: this.taskForm.get('Due Date').value,
      status: 'In Progress',
      comments: 'These are some comments.'
    };

    // Handle form submission logic
  }
}
