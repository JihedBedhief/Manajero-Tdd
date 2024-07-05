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

  what : any [] = [];
  how : any [] = [];
  why : any [] = [];
  whatif : any [] = [];
  intro : any [] = [];
  avantage : any [] = [];
  limitation : any [] = [];

  constructor(private _What : WhatService, private _How : HowService,private _Why:WhyService,private _WahtIf: WhatIfService,private _intro : IntroService,private _av : AvantageService,private _lim: LimitationService,){}

  ngOnInit() {
    this.getAllWhat();
    this.getAllHow();
    this.getAllWhy();
    this.getAllWhatIf();
    this.getAllIntro();
    this.getAllavantage();
    this.getAllLimitation();
  }

  getAllWhat(){
    this._What.getWhat().subscribe(res =>{
      console.log(res);
      this.what = res; 
      console.log(this.what);
    })
  }
  getAllHow(){
    this._How.getHow().subscribe(res =>{
      this.how = res; 

    })
  }
  getAllWhy(){
    this._Why.getWhy().subscribe(res =>{
      this.why = res; 
    })
  }
  getAllWhatIf(){
    this._WahtIf.getWhatIf().subscribe(res =>{
      this.whatif = res; 
    })
  }
  getAllIntro(){
    this._intro.getIntro().subscribe(res =>{
      console.log(res);
      this.intro = res; 
      console.log(this.intro);

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
