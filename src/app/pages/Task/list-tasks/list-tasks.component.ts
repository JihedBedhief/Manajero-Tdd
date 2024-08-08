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
import { UpdateTaskComponent } from '../update-task/update-task.component';
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
    { name: 'Set up development environment', tests: [{ name: 'Install IDE', completed: false }, { name: 'Configure Linter', completed: false }], status: 'todo' },
    { name: 'Gather project requirements', tests: [{ name: 'Client Interview', completed: false }, { name: 'Requirement Document', completed: false }], status: 'todo' },
    { name: 'Design project architecture', tests: [{ name: 'Create UML diagrams', completed: false }, { name: 'Define Modules', completed: false }], status: 'todo' },
    { name: 'Plan sprint tasks', tests: [{ name: 'Backlog Refinement', completed: false }, { name: 'Sprint Planning', completed: false }], status: 'todo' }
  ];
  
  inProgress: Task[] = [
    { name: 'Develop login module', tests: [{ name: 'Create UI', completed: false }, { name: 'Integrate Backend', completed: true }], status: 'inProgress' },
    { name: 'Create database schema', tests: [{ name: 'Define Entities', completed: false }, { name: 'Set up Relationships', completed: true }], status: 'inProgress' }
  ];
  
  done: Task[] = [
    { name: 'Initialize project repository', tests: [{ name: 'Create Repo', completed: true }, { name: 'Initial Commit', completed: true }], status: 'done' },
    { name: 'Setup CI/CD pipeline', tests: [{ name: 'Create Build Script', completed: true }, { name: 'Integrate with GitHub Actions', completed: true }], status: 'done' },
    { name: 'Write project documentation', tests: [{ name: 'Setup Wiki', completed: true }, { name: 'Document API', completed: true }], status: 'done' },
    { name: 'Conduct code review', tests: [{ name: 'Review PRs', completed: true }, { name: 'Merge PRs', completed: true }], status: 'done' },
    { name: 'Deploy to staging environment', tests: [{ name: 'Build Docker Image', completed: true }, { name: 'Deploy on Heroku', completed: true }], status: 'done' }
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
  openUpdateModal(task: Task) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { task },
      width: '50vw',  // Adjust width to make the modal smaller
      maxWidth: '90vw', // Ensure it doesn’t exceed 90% of the viewport width
      panelClass: 'custom-modal'  // Ensure the modal itself also respects this width
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onStatusChange(result); // Update the task list
      }
    });
  }
  openDetailsModal(task: Task) {
    this.dialog.open(CardDetailsComponent, {
      data: { task },
      maxWidth: '80vw', // Set the modal width to 80% of the viewport width
    });
  }

  onStatusChange(updatedTask: Task) {
    // Remove the task from its previous list
    this.removeTaskFromList(updatedTask);
    // Add the task to the correct list based on its updated status
    this.addTaskToList(updatedTask);
  }


  deleteItemm(list: Task[], index: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    
    if (confirmDelete) {
      const task = list[index];
      this.removeTaskFromList(task);
    }
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
