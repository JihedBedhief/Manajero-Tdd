import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component } from "@angular/core";


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
export class TDDComponent {}
