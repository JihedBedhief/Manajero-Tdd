import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CardDetailsComponent } from '../card-details/card-details.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'ngx-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
  standalone:true,
  imports:[
    TaskCardComponent,
    CommonModule,
    CdkDrag,
    CdkDropList]
})
export class ListTasksComponent {

  constructor(private dialog: MatDialog) {}



  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = ['Work on project', 'Study for exam'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  deleteItem(list: string[], index: number) {
    list.splice(index, 1);
  }

  editItem(item: string) {
    const newValue = prompt('Edit item', item);
    if (newValue !== null && newValue.trim() !== '') {
      const index = this.todo.indexOf(item);
      if (index !== -1) {
        this.todo[index] = newValue;
      } else {
        const inProgressIndex = this.inProgress.indexOf(item);
        if (inProgressIndex !== -1) {
          this.inProgress[inProgressIndex] = newValue;
        } else {
          const doneIndex = this.done.indexOf(item);
          if (doneIndex !== -1) {
            this.done[doneIndex] = newValue;
          }
        }
      }
    }
  }


  openDetailsModal(item: string) {
    this.dialog.open(CardDetailsComponent, {
      data: { item },
      width: '300px',
    });
  }
}
