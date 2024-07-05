import { Component, OnInit } from '@angular/core';
import { WhatService } from '../../../services/what/what.service';
import { HowService } from '../../../services/how/how.service';
import { WhyService } from '../../../services/why/why.service';
import { WhatIfService } from '../../../services/whatIf/what-if.service';
import { IntroService } from '../../../services/intro/intro.service';
import { AvantageService } from '../../../services/avantage/avantage.service';
import { LimitationService } from '../../../services/limitation/limitation.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
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
      console.log(res);
      this.limitation = res; 
      console.log(this.limitation);

    })
  }
  deleteWhat(id: number) {
    this._What.deleteWhatById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllWhat();
      }
    })
  }
  deleteHow(id: number) {
    this._How.deleteHowById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllHow();
      }
    })
  }
  deleteWhy(id: number) {
    this._Why.deleteWhyById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllWhy();
      }
    })
  }
  deleteWhatIf(id: number) {
    this._WahtIf.deleteWhatIfById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllWhatIf();
      }
    })
  }
  deleteIntro(id: number) {
    this._intro.deleteIntroById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllIntro();
      }
    })
  }
  deleteAvanatage(id: number) {
    this._av.deleteAvantageById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllavantage();
      }
    })
  }
  deleteLimitation(id: number) {
    this._lim.deleteLimitationById(id).subscribe(res=>{
      if(res && res.body){
  
      }else{
               this.getAllLimitation();
      }
    })
  }

  updateWhat(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._What.updateWhat(id,newItem).subscribe(response => {
        this.getAllWhat();
      });
    }
  }
  updateHow(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._How.updateHow(id,newItem).subscribe(response => {
        this.getAllHow();
      });
    }
  }
  updateWhy(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._Why.updateWhy(id,newItem).subscribe(response => {
        this.getAllWhy();
      });
    }
  }
  updateWhatIf(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._WahtIf.updateWhatIf(id,newItem).subscribe(response => {
        this.getAllWhatIf();
      });
    }
  }
  updateIntro(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._intro.updateIntro(id,newItem).subscribe(response => {
        this.getAllIntro();
      });
    }
  }
  updateAvantage(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._av.updateAvantage(id,newItem).subscribe(response => {
        this.getAllavantage();
      });
    }
  }
  updateLimitation(id: number) {
    const itemName = prompt('Enter new name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._lim.updateLimitation(id,newItem).subscribe(response => {
        this.getAllLimitation();
      });
    }
  }

  addWhat() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._What.addWhat(newItem).subscribe(response => {
        this.getAllWhat();
      });
    }
  }
  addHow() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._How.addHow(newItem).subscribe(response => {
        this.getAllHow();
      });
    }
  }
  addWhy() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._Why.addWhy(newItem).subscribe(response => {
        this.getAllWhy();
      });
    }
  }
  addWhatIf() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._WahtIf.addWhatIf(newItem).subscribe(response => {
        this.getAllWhatIf();
      });
    }
  }
  addIntro() {
    const itemName = prompt('Enter new item name:');
    if (itemName) {
      const newItem = { description: itemName };
      this._intro.addIntro(newItem).subscribe(response => {
        this.getAllIntro();
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
