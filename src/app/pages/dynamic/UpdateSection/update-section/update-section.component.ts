import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionService } from '../../../../services/Section/section.service';

@Component({
  selector: 'ngx-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.scss']
})
export class UpdateSectionComponent {

  constructor(
    private fb: FormBuilder,
    private _section: SectionService,
    private router: Router,
    private activatedroute:ActivatedRoute,
    private _dialogue : MatDialogRef<UpdateSectionComponent>,@Inject(MAT_DIALOG_DATA) public data: { id: any } 
     ) {console.log(data.id);}
  sectionId = this.data.id; 
  sectionForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  existingImage : string |null= null ;
  imgChanged = false;


 
  ngOnInit(): void {
this.getSectionById();

    this.sectionForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
            });
  }

  getSectionById(){
    console.log(this.sectionId);
    this._section.getSectionById(this.sectionId).subscribe(res=>{
      this.sectionForm.patchValue(res);
      this.existingImage = `data:image/jpeg;base64,`+ res.byteImg;
     } )
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.imgChanged =true;
    this.existingImage = null;
  }

  previewImage(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }
  reloadPage() {
    location.reload();
  }

  UpdateItem(): void {
    if (this.sectionForm.invalid) {
      for (const i in this.sectionForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.sectionForm.controls, i)) {
          this.sectionForm.controls[i].markAsDirty();
          this.sectionForm.controls[i].updateValueAndValidity();
        }
      }
    } else {
      const formData: FormData = new FormData();

      if(this.imgChanged && this.selectedFile){
        formData.append('img', this.selectedFile as Blob);
      }
      formData.append('title', this.sectionForm.get('title')!.value);
      formData.append('description', this.sectionForm.get('description')!.value);

      this._section.updateSection(this.sectionId,formData).subscribe((res) => {
        if (res.id !== null) {
        //  this.router.navigateByUrl('/Items');
        this.reloadPage();
        } else {
          console.log(res);
        }
      });
    }
  }

}
