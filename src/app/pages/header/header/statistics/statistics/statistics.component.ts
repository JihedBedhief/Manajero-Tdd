import { Component } from '@angular/core';
import { TaskService } from '../../../../../services/Task/task.service';

@Component({
  selector: 'ngx-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  justStartedTasks: number;
  totalTests: number;
  completedTests: number;
  inProgressTests: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.totalTasks = this.taskService.getTotalTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
    this.inProgressTasks = this.taskService.getInProgressTasks();
    this.justStartedTasks = this.taskService.getJustStartedTasks();
    this.totalTests = this.taskService.getTotalTests();
    this.completedTests = this.taskService.getCompletedTests();
    this.inProgressTests = this.taskService.getInProgressTests();
  }

}
