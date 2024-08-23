import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { TaskService } from '../../../../../services/Task/task.service';

@Component({
  selector: 'ngx-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
    ]
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTask().subscribe(tasks => {
      // Map tasks to the format required by FullCalendar
      const events = tasks.map(task => ({
        title: task.name,
        date: task.dueDate
      }));

      // Update calendar options with fetched tasks
      this.calendarOptions.events = events;
    });
  }

  handleDateClick(arg) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
