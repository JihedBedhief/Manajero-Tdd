import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionService } from '../../../../../../../services/Section/section.service';
import { TestService } from '../../../../../../../services/Test/test.service';

@Component({
  selector: 'ngx-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent {

  testForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _test: TestService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
      ) {}

  ngOnInit(): void {
    this.testForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
        });
  }

  reload() {
    this.document.location.reload();
  }
  addTest(): void {
      const formData: FormData = new FormData();
      formData.append('title', this.testForm.get('title')!.value);
      formData.append('description', this.testForm.get('description')!.value);
      console.log(formData);

      this._test.addTest(formData).subscribe((res) => {
        if (res.id !== null) {
          //this.router.navigateByUrl('/Items');
          this.reload();
        } else {
          console.log(res);
        }
      });
  }


}
