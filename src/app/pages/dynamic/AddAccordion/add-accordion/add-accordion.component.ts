import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AccordionService } from '../../../../services/Accordion/accordion.service';

@Component({
  selector: 'ngx-add-accordion',
  templateUrl: './add-accordion.component.html',
  styleUrls: ['./add-accordion.component.scss']
})
export class AddAccordionComponent  implements OnInit{

  accordionItems: any[] = [];
  accordionForm: FormGroup;

  constructor(private _accordion: AccordionService, private fb: FormBuilder) {
    this.accordionForm = this.fb.group({
      title: ['', Validators.required],
      content: this.fb.array([this.fb.control('')])
    });
  }

  ngOnInit(): void {
    this.loadAccordionItems();
  }

  loadAccordionItems(): void {
    this._accordion.getAccordion().subscribe(data => {
      this.accordionItems = data;
    });
  }

  get content(): FormArray {
    return this.accordionForm.get('content') as FormArray;
  }

  addContentField(): void {
    this.content.push(this.fb.control(''));
  }

  removeContentField(index: number): void {
    this.content.removeAt(index);
  }

  onSubmit(): void {
    if (this.accordionForm.valid) {
      const newItem: any = {
        title: this.accordionForm.value.title,
        content: this.accordionForm.value.content
      };
      this._accordion.addAccordion(newItem).subscribe(() => {
        this.loadAccordionItems();
        this.accordionForm.reset();
        this.content.clear();
        this.content.push(this.fb.control(''));
      });
    }
  }

}
