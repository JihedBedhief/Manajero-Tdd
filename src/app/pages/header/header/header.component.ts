import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateToTDD() {
    this.router.navigate(['/agile/tdd/dynamic']);
  }

}
