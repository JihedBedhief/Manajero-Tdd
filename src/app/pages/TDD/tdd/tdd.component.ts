import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tdd',
  templateUrl: './tdd.component.html',
  styleUrls: ['./tdd.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class TDDComponent {

}
