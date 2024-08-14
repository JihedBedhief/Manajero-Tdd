import { Component } from '@angular/core';
import { KpiService } from '../../../../../services/Kpis/kpi.service';

@Component({
  selector: 'ngx-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent {
  testKPIs: any;

  constructor(private kpiService: KpiService) { }

  ngOnInit(): void {
    this.kpiService.getTestKPIs().subscribe(data => {
      this.testKPIs = data;
      console.log(this.testKPIs);
    });
  }

}
