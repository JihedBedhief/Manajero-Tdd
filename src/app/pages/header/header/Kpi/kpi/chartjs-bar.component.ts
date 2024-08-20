import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { KpiService } from '../../../../../services/Kpis/kpi.service';

@Component({
  selector: 'ngx-chartjs-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarComponent implements OnInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  taskData: any;

  constructor(private theme: NbThemeService, private kpiService: KpiService) {}

  ngOnInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.kpiService.getTaskKPIs().subscribe(taskData => {
        this.taskData = taskData;
        console.log(this.taskData);

        const toDoTasks = this.taskData.toDoTasks || 0;
        const inProgressTasks = this.taskData.inProgressTasks || 0;
        const doneTasks = this.taskData.doneTasks || 0;
        const totalTasks = toDoTasks + inProgressTasks + doneTasks;

        this.data = {
          labels: ['To Do', 'In Progress', 'Done', 'Total'], // Added 'Total' label
          datasets: [{
            data: [toDoTasks, inProgressTasks, doneTasks, totalTasks], // Added totalTasks
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight], // Added color for Total
            borderColor: '#003d7a',
            borderWidth: 0
          }]
        };

        this.options = {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            labels: {
              fontColor: chartjs.textColor,
            },
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            }],
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
