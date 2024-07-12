import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepService } from '../../../../services/step/step.service';

@Component({
  selector: 'ngx-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {
  stepForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _step: StepService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      label: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  reload() {
    this.document.location.reload();
  }

  addSection(): void {
    if (this.stepForm.invalid) {
      for (const i in this.stepForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.stepForm.controls, i)) {
          this.stepForm.controls[i].markAsDirty();
          this.stepForm.controls[i].updateValueAndValidity();
        }
      }
    } else {
      const formData: FormData = new FormData();
      formData.append('label', this.stepForm.get('label')!.value);
      formData.append('title', this.stepForm.get('title')!.value);
      formData.append('description', this.stepForm.get('description')!.value);
      console.log(formData);
      this._step.addStep(formData).subscribe((res) => {
        if (res.id !== null) {
          this.reload();
        } else {
          console.log(res);
        }
      });
    }
  }
}
