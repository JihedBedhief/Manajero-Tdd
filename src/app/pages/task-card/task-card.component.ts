import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone: true 
})
export class TaskCardComponent {
  @Input() item: string;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() viewDetails = new EventEmitter<void>();
  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.edit.emit();
  }

  onViewDetails() {
    this.viewDetails.emit();
  }
}
