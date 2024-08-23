import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';    
import { Task } from '../../Models/Task';


@Component({
  selector: 'ngx-task-card',
  templateUrl: './task-card.component.html',
  imports: [CommonModule, FormsModule],  
  styleUrls: ['./task-card.component.scss'],
  standalone: true 
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() viewDetails = new EventEmitter<void>();
  @Output() statusChange = new EventEmitter<Task>(); 

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
    this.statusChange.emit(this.task); 
  }

  updateTaskStatus() {
    if (this.task.tests.every(test => test.completed)) {
      this.task.status = 'done';
    } else if (this.task.tests.some(test => test.completed)) {
      this.task.status = 'in Progress';
    } else {
      this.task.status = 'To do';
    }
  }
}
