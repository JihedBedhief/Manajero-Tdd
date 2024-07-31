import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';    // Import FormsModule
import { Task } from '../list-tasks/list-tasks.component';


@Component({
  selector: 'ngx-task-card',
  templateUrl: './task-card.component.html',
  imports: [CommonModule, FormsModule],  // Import CommonModule and FormsModule
  styleUrls: ['./task-card.component.scss'],
  standalone: true 
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() viewDetails = new EventEmitter<void>();
  @Output() statusChange = new EventEmitter<Task>(); // Emit status change

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.edit.emit();
  }

  onViewDetails() {
    this.viewDetails.emit();
  }

  onTestChange() {
    this.updateTaskStatus();
    this.statusChange.emit(this.task); // Emit updated task
  }

  updateTaskStatus() {
    if (this.task.tests.every(test => test.completed)) {
      this.task.status = 'done';
    } else if (this.task.tests.some(test => test.completed)) {
      this.task.status = 'inProgress';
    } else {
      this.task.status = 'todo';
    }
  }
}
