import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { NbDateService } from '@nebular/theme';
import { TaskService } from '../../../services/Task/task.service';

@Component({
  selector: 'ngx-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskItems: any[] = [];
  taskForm: FormGroup;
  min: Date;
  max: Date;

  constructor(private _task: TaskService, private fb: FormBuilder, protected dateService: NbDateService<Date>) {
    this.taskForm = this.fb.group({
      
      name: ['', Validators.required],
      project: ['', Validators.required],
      assigned: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      comments: this.fb.array([this.fb.control('')]),
    });
  }

  ngOnInit(): void {
    this.loadTaskItems();
  }

  loadTaskItems(): void {
    this._task.getTask().subscribe(data => {
      this.taskItems = data;
    });
  }

  get comments(): FormArray {
    return this.taskForm.get('comments') as FormArray;
  }

  addCommentField(): void {
    this.comments.push(this.fb.control(''));
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newItem = this.taskForm.value;
      this._task.addTask(newItem).subscribe(() => {
        this.loadTaskItems();
        this.taskForm.reset();
        this.comments.clear();
        this.comments.push(this.fb.control(''));
      });
    } else {
      Object.keys(this.taskForm.controls).forEach(field => {
        const control = this.taskForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}