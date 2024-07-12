import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from '../../../../services/Section/section.service';

@Component({
  selector: 'ngx-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent {

  sectionForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private _section: SectionService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
      ) {}
  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
        });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }

  reload() {
    this.document.location.reload();
  }
  addSection(): void {
    if (this.sectionForm.invalid) {
      for (const i in this.sectionForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.sectionForm.controls, i)) {
          this.sectionForm.controls[i].markAsDirty();
          this.sectionForm.controls[i].updateValueAndValidity();
        }
      }
    } else {
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile as Blob);
      formData.append('title', this.sectionForm.get('title')!.value);
      formData.append('description', this.sectionForm.get('description')!.value);
      console.log(formData);

      this._section.addSection(formData).subscribe((res) => {
        if (res.id !== null) {
          //this.router.navigateByUrl('/Items');
          this.reload();
        } else {
          console.log(res);
        }
      });
    }
  }


}
