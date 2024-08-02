import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/Task/task.service';
import { NbDateService } from '@nebular/theme';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  selector: 'ngx-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  taskForm: FormGroup;
  task: Task;
  min: Date;
  max: Date;

  constructor(private _task: TaskService, private fb: FormBuilder, protected dateService: NbDateService<Date>,public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Task }) {
      this.task = data.item;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    

    this.taskForm = this.fb.group({
      name: [this.task.name, Validators.required],
      project: [this.task.project || '', Validators.required],  // Assuming you have project data
      assigned: [this.task.assigned || '', Validators.required],  // Assuming you have assigned data
      description: [this.task.description, Validators.required],
      dueDate: [this.task.dueDate || '', Validators.required],
      status: [this.task.status, Validators.required],
      comments: [this.task.comments, Validators.required],
       });
  }

  get comments(): FormArray {
    return this.taskForm.get('comments') as FormArray;
  }

  addCommentField() {
    this.comments.push(this.fb.group({ comment: [''] }));
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Handle the form submission
      console.log('Updated Task:', this.taskForm.value);
      this.dialogRef.close(this.taskForm.value);
    }
  }
}
