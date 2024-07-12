import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccordionService } from '../../../../services/Accordion/accordion.service';

interface AccordionItem {
  id?: number;
  title: string;
  content: string[];
}


@Component({
  selector: 'ngx-aupdate-accordion',
  templateUrl: './aupdate-accordion.component.html',
  styleUrls: ['./aupdate-accordion.component.scss']
})
export class AupdateAccordionComponent {
  accordionForm: FormGroup;
  item: AccordionItem;

  constructor(
    private fb: FormBuilder,
    private accordionService: AccordionService,
    public dialogRef: MatDialogRef<AupdateAccordionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AccordionItem
  ) {
    this.item = data;
    this.accordionForm = this.fb.group({
      title: [this.item.title, Validators.required],
      content: this.fb.array(this.item.content.map(c => this.fb.control(c, Validators.required)))
    });
  }
  
  refresh(){
    location.reload();
  }

  ngOnInit(): void {}

  get content(): FormArray {
    return this.accordionForm.get('content') as FormArray;
  }

  addContentField(): void {
    this.content.push(this.fb.control('', Validators.required));
  }

  removeContentField(index: number): void {
    this.content.removeAt(index);
  }

  onSubmit(): void {
    if (this.accordionForm.valid) {
      const updatedItem: AccordionItem = {
        id: this.item.id,
        title: this.accordionForm.value.title,
        content: this.accordionForm.value.content
      };
      this.accordionService.updateAccordion(updatedItem.id, updatedItem).subscribe(() => {
        this.refresh();
        this.dialogRef.close(updatedItem);
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
