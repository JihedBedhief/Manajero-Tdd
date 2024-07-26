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
interface Test {
  name: string;
  completed: boolean;
}

export interface Task {
  name: string;
  tests: Test[];
  status: 'todo' | 'inProgress' | 'done';
}
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

  todo: Task[] = [
    { name: 'Get to work', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: false }], status: 'todo' },
    { name: 'Pick up groceries', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: false }], status: 'todo' },
    { name: 'Go home', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: false }], status: 'todo' },
    { name: 'Fall asleep', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: false }], status: 'todo' }
  ];
  
  inProgress: Task[] = [
    { name: 'Work on project', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: true }], status: 'inProgress' },
    { name: 'Study for exam', tests: [{ name: 'Test 1', completed: false }, { name: 'Test 2', completed: true }], status: 'inProgress' }
  ];
  
  done: Task[] = [
    { name: 'Get up', tests: [{ name: 'Test 1', completed: true }, { name: 'Test 2', completed: true }], status: 'done' },
    { name: 'Brush teeth', tests: [{ name: 'Test 1', completed: true }, { name: 'Test 2', completed: true }], status: 'done' },
    { name: 'Take a shower', tests: [{ name: 'Test 1', completed: true }, { name: 'Test 2', completed: true }], status: 'done' },
    { name: 'Check e-mail', tests: [{ name: 'Test 1', completed: true }, { name: 'Test 2', completed: true }], status: 'done' },
    { name: 'Walk dog', tests: [{ name: 'Test 1', completed: true }, { name: 'Test 2', completed: true }], status: 'done' }
  ];
  

  drop(event: CdkDragDrop<Task[]>) {
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

  deleteItem(list: Task[], index: number) {
    list.splice(index, 1);
  }

  editItem(task: Task) {
    const newValue = prompt('Edit item', task.name);
    if (newValue !== null && newValue.trim() !== '') {
      task.name = newValue;
    }
  }

  openDetailsModal(task: Task) {
    this.dialog.open(CardDetailsComponent, {
      data: { task },
      width: '300px',
    });
  }

  onStatusChange(updatedTask: Task) {
    // Remove the task from its previous list
    this.removeTaskFromList(updatedTask);
    // Add the task to the correct list based on its updated status
    this.addTaskToList(updatedTask);
  }

  removeTaskFromList(task: Task) {
    let index = this.todo.findIndex(t => t.name === task.name);
    if (index !== -1) this.todo.splice(index, 1);
    
    index = this.inProgress.findIndex(t => t.name === task.name);
    if (index !== -1) this.inProgress.splice(index, 1);
    
    index = this.done.findIndex(t => t.name === task.name);
    if (index !== -1) this.done.splice(index, 1);
  }

  addTaskToList(task: Task) {
    if (task.status === 'todo') {
      this.todo.push(task);
    } else if (task.status === 'inProgress') {
      this.inProgress.push(task);
    } else if (task.status === 'done') {
      this.done.push(task);
    }
  }
}
