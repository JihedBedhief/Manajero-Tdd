import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NbDateService } from '@nebular/theme';
import { ProjectService } from '../../../services/project/project.service';


interface Task {
  id: string;
  name: string;
  project: string;
  assigned: string[];
  description: string;
  dueDate: Date;
  status: string;
  comments: string;
  tests: any[]; 
}

@Component({
  selector: 'ngx-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  Project :any ;
  taskForm: FormGroup;
  task: Task;  

  constructor(private projectservice:ProjectService,
    private fb: FormBuilder, protected dateService: NbDateService<Date>,
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }  
  ) {
    this.task = data.task;  
    this.taskForm = this.fb.group({
      title: [this.task.name, Validators.required],
      'Due Date': [this.task.dueDate],
      content: this.fb.array([this.fb.control(this.task.description)]),
    });
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
    this.task = {
      ...this.task,
      name: this.taskForm.get('title')?.value,
      dueDate: this.taskForm.get('Due Date')?.value,
      description: this.taskForm.get('content')?.value.join(', '),
    };
  }
}
