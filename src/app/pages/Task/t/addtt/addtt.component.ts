import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { TaskService } from '../../../../services/Task/task.service';
import { TestService } from '../../../../services/Test/test.service';
import { ProjectService } from '../../../../services/project/project.service';

@Component({
  selector: 'ngx-addtt',
  templateUrl: './addtt.component.html',
  styleUrls: ['./addtt.component.scss']
})
export class AddttComponent {

  taskItems: any[] = [];
  taskForm: FormGroup;
  tests: any[] = [];
  projects: any[] = [];

  

  min: Date;
  max: Date;

  constructor(private _task: TaskService, private fb: FormBuilder,private _test: TestService,private _project : ProjectService,
    protected dateService: NbDateService<Date>) {
    this.taskForm = this.fb.group({
      
      name: ['', Validators.required],
      project: ['', Validators.required],
      assigned: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      tests: [null, [Validators.required]],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadTaskItems();
    this.loadProjects();

  }

  loadTaskItems(): void {
    this._test.getTest().subscribe(data => {
      this.tests = data;
    });
  }
  loadProjects(): void {
    this._project.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  get comments(): FormArray {
    return this.taskForm.get('comments') as FormArray;
  }

  addCommentField(): void {
    this.comments.push(this.fb.control(''));
  }

  reload (){
    location.reload();
  }



  onSubmit(): void {
   //   const formData: FormData = new FormData();
     /* formData.append('name', this.taskForm.get('name')!.value);
      formData.append('project', this.taskForm.get('project')!.value);
      formData.append('assigned', this.taskForm.get('assigned')!.value);
      formData.append('description', this.taskForm.get('description')!.value);
      formData.append('dueDate', this.taskForm.get('dueDate')!.value);
      formData.append('comments', this.taskForm.get('comments')!.value);
      formData.append('testIds', this.taskForm.get('tests')!.value);*/
      const formData = this.taskForm.value;


      console.log(formData);

      const selectedTests = formData.tests;  // This will be an array of selected test IDs

      console.log('Selected Tests:', selectedTests); // This will be an array of selected test IDs


      this._task.addTask(formData,selectedTests).subscribe((res) => {
        if (res.id !== null) {
          //this.router.navigateByUrl('/Items');
          this.reload();
        } else {
          console.log(res);
        }
      });
  }

}
