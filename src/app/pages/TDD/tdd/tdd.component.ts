import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component } from "@angular/core";
import { AvantageService } from "../../../services/avantage/avantage.service";
import { HowService } from "../../../services/how/how.service";
import { IntroService } from "../../../services/intro/intro.service";
import { LimitationService } from "../../../services/limitation/limitation.service";
import { WhatService } from "../../../services/what/what.service";
import { WhatIfService } from "../../../services/whatIf/what-if.service";
import { WhyService } from "../../../services/why/why.service";
import { AccordionService } from "../../../services/Accordion/accordion.service";
import { SectionService } from "../../../services/Section/section.service";
import { StepService } from "../../../services/step/step.service";


@Component({
  selector: 'ngx-stepper',
  templateUrl: 'tdd.component.html',
  styleUrls: ['tdd.component.scss'],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.5s", style({ opacity: 1 })),
      ]),
    ]),
    trigger("slideIn", [
      transition(":enter", [
        style({ transform: "translateX(-100%)", opacity: 0 }),
        animate("0.5s", style({ transform: "translateX(0)", opacity: 1 })),
      ]),
    ]),
    trigger("zoomIn", [
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }),
        animate("0.5s", style({ transform: "scale(1)", opacity: 1 })),
      ]),
    ]),
    trigger("fadeInUp", [
      transition(":enter", [
        style({ transform: "translateY(100%)", opacity: 0 }),
        animate("0.5s", style({ transform: "translateY(0)", opacity: 1 })),
      ]),
    ]),
  ],
})
export class TDDComponent {

 
  avantage : any [] = [];
  limitation : any [] = [];
  section : any [] = [];
  accordionItems: any[] = [];
  steps: any[] = [];


  constructor(private _av : AvantageService,private _lim: LimitationService,private _section :SectionService,private _accordion: AccordionService,private _step :StepService
  ){}

  ngOnInit() {
   
    this.getAllavantage();
    this.getAllLimitation();
    this.getAllSection();
    this.loadAccordionItems();
    this.getAllstep();

  }
  shouldDisplayInPre(title: string): boolean {
    const keywords = ['why', 'how', 'what', 'What-If'];
    return keywords.some(keyword => title.toLowerCase().includes(keyword.toLowerCase()));
  }


  loadAccordionItems(): void {
    this._accordion.getAccordion().subscribe(data => {
      this.accordionItems = data;
    });
  }
 
  getAllstep() {
    this._step.getStep().subscribe(data => {
      this.steps = data;
    });
  }
  getAllSection(){
    this._section.getSection().subscribe(res =>{
      res.forEach((element: { processedImg: string; byteImg: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
        this.section.push(element);
        console.log(element);
        
      });
    })
  }
 
  getAllavantage(){
    this._av.getAvantage().subscribe(res =>{
      this.avantage = res; 
    })
  }
  getAllLimitation(){
    this._lim.getLimitation().subscribe(res =>{
      this.limitation = res; 
    })
  }

}
