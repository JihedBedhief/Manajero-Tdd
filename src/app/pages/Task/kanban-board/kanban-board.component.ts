// kanban-board.component.ts
/*import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface Task {
  id: number;
  name: string;
}

interface Column {
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  columns: Column[] = [
    { name: 'To Do', tasks: [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }] },
    { name: 'In Progress', tasks: [{ id: 3, name: 'Task 3' }] },
    { name: 'Done', tasks: [{ id: 4, name: 'Task 4' }] }
  ];

  onDrop(event: CdkDragDrop<Task[]>, column: Column): void {
    const prevContainer = event.previousContainer.data;
    const movedTask = event.item.data;

    // Remove task from the previous container
    prevContainer.splice(prevContainer.indexOf(movedTask), 1);

    // Add task to the new column
    column.tasks.push(movedTask);
  }
}*/


/*import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface Task {
  id: number;
  name: string;
}

interface Column {
  id: number;
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  tasksColumn: Task[] = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
    { id: 4, name: 'Task 4' }
  ];

  columns: Column[] = [
    { id: 1, name: 'To Do', tasks: [] },
    { id: 2, name: 'In Progress', tasks: [] },
    { id: 3, name: 'Done', tasks: [] }
  ];

  onDrop(event: CdkDragDrop<Task[], Task[]>): void {
    const task = event.item.data as Task;
    const targetContainer = event.container.data as Task[];

    if (event.previousContainer === event.container) {
      // Task is being moved within the same container
      return;
    }

    // Remove the task from the previous container
    const previousContainer = event.previousContainer.data as Task[];
    const taskIndex = previousContainer.indexOf(task);
    if (taskIndex > -1) {
      previousContainer.splice(taskIndex, 1);
    }

    // Add the task to the new container
    targetContainer.push(task);
  }
}*/
import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface Task {
  id: number;
  name: string;
}

interface Column {
  id: number;
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  tasksColumn: Task[] = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
    { id: 4, name: 'Task 4' }
  ];

  columns: Column[] = [
    { id: 1, name: 'To Do', tasks: [] },
    { id: 2, name: 'In Progress', tasks: [] },
    { id: 3, name: 'Done', tasks: [] }
  ];

  onDrop(event: CdkDragDrop<Task[] | Column['tasks']>) {
    const task = event.item.data as Task;
    const targetContainer = event.container.data as Task[];

    if (event.previousContainer === event.container) {
      // Task is being moved within the same container (e.g., within 'tasks' or within a Kanban column)
      return;
    }

    // Remove the task from the previous container
    const previousContainer = event.previousContainer.data as Task[];
    const taskIndex = previousContainer.indexOf(task);
    if (taskIndex > -1) {
      previousContainer.splice(taskIndex, 1);
    }

    // Add the task to the new container
    targetContainer.push(task);
  }
}
