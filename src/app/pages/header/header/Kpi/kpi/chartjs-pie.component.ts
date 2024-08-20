import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { KpiService } from '../../../../../services/Kpis/kpi.service';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieComponent implements OnDestroy, OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  testData: any;

  constructor(private theme: NbThemeService, private kpiService: KpiService) {}

  ngOnInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.kpiService.getTestKPIs().subscribe(testData => {
        this.testData = testData;
        console.log(this.testData);

        const totalTests = this.testData.totalTests || 0;
        const passedTests = this.testData.passedTests || 0;
        const failedTests = this.testData.failedTests || 0;

        this.data = {
          labels: ['Passed Tests', 'Failed Tests', 'Total Tests'],
          datasets: [{
            data: [passedTests, failedTests, totalTests],
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
          }],
        };

        this.options = {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [{
              display: false,
            }],
            yAxes: [{
              display: false,
            }],
          },
          legend: {
            labels: {
              fontColor: chartjs.textColor,
            },
          },
        };
      });
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
