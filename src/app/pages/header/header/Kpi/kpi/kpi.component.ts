import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../../../../services/Kpis/kpi.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <div style="display: flex; justify-content: space-around;">
      <div style="width: 45%;">
        <canvas id="pieChart"></canvas>
      </div>
      <div style="width: 45%;">
        <canvas id="barChart"></canvas>
      </div>
    </div>
  `,
  styleUrls: ['./kpi.component.scss'] // Ensure the SCSS file is linked here
})
export class KpiComponent implements OnInit {
  private pieChart: Chart | undefined;
  private barChart: Chart | undefined;

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    // Fetch both test and task KPIs
    this.kpiService.getTestKPIs().subscribe(testData => {
      this.kpiService.getTaskKPIs().subscribe(taskData => {
        this.updateCharts(testData, taskData);
      });
    });
  }

  private updateCharts(testData: any, taskData: any): void {
    // Pie chart for test KPIs
    const totalTests = testData.totalTests || 0;
    const passedTests = testData.passedTests || 0;
    const failedTests = testData.failedTests || 0;

    const pieData = {
      labels: ['Passed Tests', 'Failed Tests', 'Total Tests'],
      datasets: [{
        data: [passedTests, failedTests, totalTests],
        backgroundColor: ['#007bff', '#0056b3', '#003d7a'] // Different shades of blue
      }]
    };

    const pieOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem: any) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            }
          }
        }
      }
    };

    if (this.pieChart) {
      this.pieChart.destroy();
    }

    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });

    // Bar chart for task KPIs
    const toDoTasks = taskData.toDoTasks || 0;
    const inProgressTasks = taskData.inProgressTasks || 0;
    const doneTasks = taskData.doneTasks || 0;

    const barData = {
      labels: ['To Do', 'In Progress', 'Done'],
      datasets: [{
        data: [toDoTasks, inProgressTasks, doneTasks],
        backgroundColor: ['#007bff', '#0056b3', '#003d7a'], // Shades of blue
        borderColor: '#003d7a',
        borderWidth: 1
      }]
    };

    const barOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem: any) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true
        }
      }
    };

    if (this.barChart) {
      this.barChart.destroy();
    }

    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: barData,
      options: barOptions
    });
  }
}
