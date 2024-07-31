import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskItems: any[] = [];
  taskForm: FormGroup;
  min: Date;
  max: Date;


  constructor( private fb: FormBuilder, protected dateService: NbDateService<Date>) {
    
    //this.min = this.dateService.addDay(this.dateService.today(), -5);
    //this.max = this.dateService.addDay(this.dateService.today(), 5);
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      'Due Date': [''],
      content: this.fb.array([this.fb.control('')]),

    });
  }


  get content(): FormArray {
    return this.taskForm.get('content') as FormArray;
  }
  addContentField(): void {
    this.content.push(this.fb.control(''));
  }
  onSubmit(): void {
 /*if (this.taskForm.valid) {
      const newItem: any = {
        title: this.taskForm.value.title,
        content: this.taskForm.value.content
      };
      this._task.addTask(newItem).subscribe(() => {
        this.loadTaskItems();
        this.taskForm.reset();
        this.content.clear();
        this.content.push(this.fb.control(''));
      });
    }*/
  }

}
