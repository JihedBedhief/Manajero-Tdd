import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../../../../../services/project/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ngx-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit{
  ProjectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _project: ProjectService,
    private router: Router,
    private _dialogue: MatDialogRef<UpdateProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: any }
  ) {
    console.log(this.data.id);
  }

  projectId = this.data.id;

  ngOnInit(): void {
    this.ProjectForm = this.fb.group({
      name: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
    this.getProjectById();
  }

  getProjectById() {
    console.log(this.projectId);
    this._project.getProjectById(this.projectId).subscribe(res => {
      // Use patchValue to populate the form with the data received
      this.ProjectForm.patchValue({
        name: res.name,  // Assuming the backend field is 'name'
        description: res.description,
        startDate: res.description,
        endDate: res.description
      });
    });
  }

  reloadPage() {
    location.reload();
  }

  /*updateProject(): void {
    const projectData = {
      name: this.ProjectForm.get('name')!.value,
      description: this.ProjectForm.get('description')!.value,
      startDate: this.ProjectForm.get('startDate')!.value,
      endDate: this.ProjectForm.get('endDate')!.value
    };

    this._project.updateProject(this.projectId, projectData).subscribe((res) => {
      if (res.id !== null) {
        this.reloadPage();
      } else {
        console.log(res);
      }
    });
  }*/
    updateProject(): void {
      const formData: FormData = new FormData();
        formData.append('name', this.ProjectForm.get('name')!.value);
        formData.append('description', this.ProjectForm.get('description')!.value);
        formData.append('startDate', this.ProjectForm.get('startDate')!.value);
        formData.append('endDate', this.ProjectForm.get('endDate')!.value);
        console.log(formData);
      this._project.updateProject(this.ProjectForm.value, formData).subscribe((res) => {
        if (res.id !== null) {
          this.reloadPage();
        } else {
          console.log(res);
        }
      });
    }

}
