import { Component, Inject, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "../../../services/Task/task.service";
import { NbDateService } from "@nebular/theme";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Project, Task } from "../../Models/Task";
import { Router } from "@angular/router";
import { ProjectService } from "../../../services/project/project.service";

@Component({
  selector: "ngx-update-task",
  templateUrl: "./update-task.component.html",
  styleUrls: ["./update-task.component.scss"],
})
export class UpdateTaskComponent implements OnInit {
  taskForm: FormGroup;
  task: Task;
  min: Date;
  max: Date;
  taskId: string;
  projects: Project[] = [];
  selectedProject: string | null = null;

  constructor(
    private _task: TaskService,
    private fb: FormBuilder,
    private router: Router,
    private _project: ProjectService,
    protected dateService: NbDateService<Date>,
    public dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
    this.task = data.task;
    this.taskId = this.task.id;
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: [null, [Validators.required]],
      project: [null, [Validators.required]],
      assigned: [null, [Validators.required]],
      description: [null, [Validators.required]],
      comments: [null],
      dueDate: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
    this.getProjects();
    this.getTaskById();
  }

  getProjects() {
    this._project.getProjects().subscribe((res) => {
      this.projects = res;
    });
  }
  getTaskById() {
    this._task.getTaskById(this.taskId).subscribe((res) => {
      this.selectedProject = res.project ? res.project.id : null; // Set the default project ID
      this.taskForm.patchValue({
        name: res.name,
        project: this.selectedProject,
        assigned: res.assigned,
        description: res.description,
        comments: res.comments,
        dueDate: res.dueDate,
        status: res.status,
      });
    });
  }
  onProjectChange(selectedProject: string) {
    this.taskForm.get('project')!.setValue(selectedProject);
  }

  updateTask(): void {
    if (this.taskForm.valid) {
      const formData = new FormData();
      formData.append('name', this.taskForm.get('name')!.value);
      formData.append('project', this.taskForm.get('project')!.value);
      formData.append('assigned', this.taskForm.get('assigned')!.value);
      formData.append('description', this.taskForm.get('description')!.value);
      formData.append('comments', this.taskForm.get('comments')!.value);
      formData.append('dueDate', this.taskForm.get('dueDate')!.value);
      formData.append('status', this.taskForm.get('status')!.value);

      this._task.updateTask(this.taskId, formData).subscribe(res => {
        if (res.id) {
          this.router.navigate(['/tasks']);
        } else {
          console.log(res);
        }
      });
    }
  }
}

