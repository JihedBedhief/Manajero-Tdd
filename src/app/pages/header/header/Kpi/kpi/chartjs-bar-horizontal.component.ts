import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProjectService, ProjectWithTaskCount } from '../../../../../services/project/project.service';

@Component({
  selector: 'ngx-chartjs-bar-horizontal',
  template: `
    <chart type="horizontalBar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarHorizontalComponent implements OnInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  projects: ProjectWithTaskCount[] = []; // Store projects data

  constructor(private theme: NbThemeService, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjectData();
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private loadProjectData(): void {
    this.projectService.getProjectsWithTaskCounts().subscribe(
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

      const projectNames = this.projects.map(project => project.name);
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
