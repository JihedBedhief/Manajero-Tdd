import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  selector: 'ngx-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {

  taskForm: FormGroup;
  min: Date;
  max: Date;
  task: Task;  // Declare the task property

  constructor(
    private fb: FormBuilder, protected dateService: NbDateService<Date>,
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Task }
  ) {
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

  onClose(): void {
    this.dialogRef.close();
  }

  get content(): FormArray {
    return this.taskForm.get('content') as FormArray;
  }

  addContentField(): void {
    this.content.push(this.fb.control(''));
  }

  onSubmit(): void {
    // Update the task object with form data
    this.task = {
      name: this.taskForm.get('title').value,
      project: 'Project 1',  // Set this dynamically if needed
      assigned: ['User 1', 'User 2'],  // Set this dynamically if needed
      description: this.taskForm.get('content').value.join(', '),
      dueDate: this.taskForm.get('Due Date').value,
      status: 'In Progress',  // Set this dynamically if needed
      comments: 'These are some comments.'  // Set this dynamically if needed
    };

    // Handle form submission logic
  }
}
