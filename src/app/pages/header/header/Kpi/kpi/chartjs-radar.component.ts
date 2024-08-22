import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ColabWithTaskCount, TaskService } from '../../../../../services/Task/task.service';

@Component({
  selector: 'ngx-chartjs-radar',
  template: `
    <chart type="horizontalBar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsRadarComponent implements OnInit,OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  projects: ColabWithTaskCount[] = []; // Store projects data

  constructor(private theme: NbThemeService, private task: TaskService) {}

  ngOnInit(): void {
    this.loadProjectData();
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private loadProjectData(): void {
    this.task.getProjectsWithTaskCounts().subscribe(
      (projects) => {
        this.projects = projects;
        this.updateChart();
      },
      (error) => {
        console.error('Error fetching project data', error);
      }
    );
  }

  private updateChart(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      const projectNames = this.projects.map(project => project.assigned);
      const taskCounts = this.projects.map(project => project.taskCount);

      this.data = {
        labels: projectNames,
        datasets: [{
          label: 'Number of Tasks',
          backgroundColor: colors.infoLight,
          borderWidth: 1,
          data: taskCounts,
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }
}
