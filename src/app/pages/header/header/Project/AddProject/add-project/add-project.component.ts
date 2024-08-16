import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../../../../../services/project/project.service';

@Component({
  selector: 'ngx-add-project',
  templateUrl: './add-project.component.html', // Updated template URL
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent { // Updated component name

  projectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _projectService: ProjectService, // Updated service
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: [null, [Validators.required]], // Updated control name
      startDate: [null, [Validators.required]], // Updated control name
      endDate: [null, [Validators.required]], // Updated control name
      description: [null, [Validators.required]] // Updated control name
    });
  }

  reload() {
    this.document.location.reload();
  }

  addProject(): void { // Updated method name
    const formData: FormData = new FormData();
    formData.append('name', this.projectForm.get('name')!.value);
    formData.append('description', this.projectForm.get('description')!.value);
    formData.append('startDate', this.projectForm.get('startDate')!.value);
    formData.append('endDate', this.projectForm.get('endDate')!.value);

    console.log(formData);

    this._projectService.AddProject(formData).subscribe((res) => { // Updated service method
      if (res.id !== null) {
        //this.router.navigateByUrl('/Projects'); // Optional: navigate to the list of projects or another relevant page
        this.reload();
      } else {
        console.log(res);
      }
    });
  }
}
