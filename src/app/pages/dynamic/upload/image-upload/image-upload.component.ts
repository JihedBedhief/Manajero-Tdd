import { Component, ViewChild } from '@angular/core';
import { ImageUploadServiceService } from '../../../../services/upload/image-upload-service.service';
import { HttpClient } from '@angular/common/http';
import { NbStepperComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  @ViewChild(NbStepperComponent) stepper!: NbStepperComponent;

  testName: string = '';
  selectedFile: File | null = null;
  validationResult: string | null = null;
  isSubmitting: boolean = false;

  constructor(private ocrService: ImageUploadServiceService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submit(): void {
    if (this.selectedFile && this.testName) {
      this.isSubmitting = true; // Start the submitting process
      this.ocrService.extractTextFromImage(this.selectedFile, this.testName).subscribe(
        (response: string) => {
          this.validationResult = response;
          this.isSubmitting = false; // Stop the submitting process
          // Move to the final step if there is no error
          this.stepper.next(); // Go to the next step, i.e., validation result
          // You might want to add more logic to handle specific validation scenarios
        },
        error => {
          console.error('Error:', error);
          this.isSubmitting = false; // Stop the submitting process
          // Handle errors appropriately
          alert('An error occurred while validating the test.make sure to change the photo quality .');
        }
      );
    } else {
      alert('Please upload a photo and enter the test name.');
    }
  }
}
