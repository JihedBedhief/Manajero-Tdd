import { Component, OnInit } from '@angular/core';
import { WhatService } from '../../../services/what/what.service';
import { HowService } from '../../../services/how/how.service';
import { WhyService } from '../../../services/why/why.service';
import { WhatIfService } from '../../../services/whatIf/what-if.service';
import { IntroService } from '../../../services/intro/intro.service';
import { AvantageService } from '../../../services/avantage/avantage.service';
import { LimitationService } from '../../../services/limitation/limitation.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSectionComponent } from '../AddSection/add-section/add-section.component';
import { SectionService } from '../../../services/Section/section.service';
import { UpdateSectionComponent } from '../UpdateSection/update-section/update-section.component';
import { AccordionService } from '../../../services/Accordion/accordion.service';
import { AddAccordionComponent } from '../AddAccordion/add-accordion/add-accordion.component';
import { AupdateAccordionComponent } from '../UpdateAccordion/aupdate-accordion/aupdate-accordion.component';
import { StepService } from '../../../services/step/step.service';
import { AddStepComponent } from '../AddStep/add-step/add-step.component';

interface AccordionItem {
  id?: number;
  title: string;
  content: string[];
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
 
  avantage: any[] = [];
  limitation: any[] = [];
  section: any[] = [];
  accordionItems: any[] = [];
  steps: any[] = [];

  constructor(
    private _av: AvantageService,
    private _lim: LimitationService,
    private _dialogue: MatDialog,
    private _section: SectionService,
    private _accordion: AccordionService,
    private _step :StepService

  ) {}

  ngOnInit() {
    this.getAllavantage();
    this.getAllLimitation();
    this.getAllSection();
    this.loadAccordionItems();
    this.getAllstep();
  }

  refresh() {
    location.reload();
  }

  openAddSection() {
    this._dialogue.open(AddSectionComponent);
  }
  openAddStep() {
    this._dialogue.open(AddStepComponent);
  }
  openAddAccordion() {
    this._dialogue.open(AddAccordionComponent);
  }

  openUpdate(id: any) {
    this._dialogue.open(UpdateSectionComponent, {
      data: { id: id }
    });
  }

  openUpdateAccordion(item: AccordionItem) {
    this._dialogue.open(AupdateAccordionComponent, {
      data: item
    });
  }

  getAllstep() {
    this._step.getStep().subscribe(data => {
      this.steps = data;
    });
  }
  loadAccordionItems(): void {
    this._accordion.getAccordion().subscribe(data => {
      this.accordionItems = data;
    });
  }

  getAllSection() {
    this._section.getSection().subscribe(res => {
      res.forEach((element: { processedImg: string; byteImg: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.section.push(element);
      });
    });
  }

  getAllavantage() {
    this._av.getAvantage().subscribe(res => {
      this.avantage = res;
    });
  }

  getAllLimitation() {
    this._lim.getLimitation().subscribe(res => {
      this.limitation = res;
    });
  }

  confirmDeleteAvantage(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteAvantage(id);
    }
  }

  deleteAvantage(id: number) {
    this._av.deleteAvantageById(id).subscribe(res => {
      this.getAllavantage();
    });
  }

  confirmDeleteLimitation(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteLimitation(id);
    }
  }

  deleteLimitation(id: number) {
    this._lim.deleteLimitationById(id).subscribe(res => {
      this.getAllLimitation();
    });
  }

  confirmDeleteStep(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteStep(id);
    }
  }

  deleteStep(id: number) {
    this._step.deleteStepById(id).subscribe(res => {
      this.refresh();
    });
  }

  confirmDeleteSection(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteSection(id);
    }
  }

  deleteSection(id: number) {
    this._section.deleteSectionById(id).subscribe(res => {
      this.refresh();
    });
  }

  confirmDeleteAccordion(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteAccordion(id);
    }
  }

  deleteAccordion(id: number) {
    this._accordion.deleteAccordionById(id).subscribe(res => {
      this.refresh();
    });
  }

  updateAvantage(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._av.updateAvantage(id, newItem).subscribe(response => {
        this.getAllavantage();
      });
    }
  }

  updateLimitation(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._lim.updateLimitation(id, newItem).subscribe(response => {
        this.getAllLimitation();
      });
    }
  }

  addLimitation() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._lim.addLimitation(newItem).subscribe(response => {
        this.getAllLimitation();
      });
    }
  }

  addAvantage() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._av.addAvantage(newItem).subscribe(response => {
        this.getAllavantage();
      });
    }
  }
}
