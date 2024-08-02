import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../../../../../../../services/Test/test.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ngx-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.scss']
})
export class UpdateTestComponent {

  testForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _test: TestService,
    private router: Router,
    private _dialogue : MatDialogRef<UpdateTestComponent>,@Inject(MAT_DIALOG_DATA) public data: { id: any } 
      ) {
        console.log(this.data.id);
      }

      testId = this.data.id; 


  ngOnInit(): void {
    this.testForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
        });
        this.getTestById();
  }

  getTestById(){
    console.log(this.testId);
    this._test.getTestById(this.testId).subscribe(res=>{
      this.testForm.patchValue(res);
     } )
  }

  reloadPage() {
    location.reload();
  }


  updateTest(): void {
    const formData: FormData = new FormData();
      formData.append('title', this.testForm.get('title')!.value);
      formData.append('description', this.testForm.get('description')!.value);
      console.log(formData);
    this._test.updateTest(this.testId, formData).subscribe((res) => {
      if (res.id !== null) {
        this.reloadPage();
      } else {
        console.log(res);
      }
    });
  }


}
