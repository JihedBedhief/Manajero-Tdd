import { Injectable } from '@angular/core';


export interface Test {
  id: number;
  description: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  status: 'completed' | 'just-started' | 'in-progress';
  tests: Test[];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      status: 'just-started',
      tests: [
        { id: 1, description: 'Test 1', completed: false },
        { id: 2, description: 'Test 2', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'in-progress',
      tests: [
        { id: 1, description: 'Test 1', completed: true },
        { id: 2, description: 'Test 2', completed: false },
      ],
    },
    {
      id: 3,
      title: 'Task 3',
      status: 'completed',
      tests: [
        { id: 1, description: 'Test 1', completed: true },
        { id: 2, description: 'Test 2', completed: true },
      ],
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  updateTaskStatus(taskId: number, status: Task['status']) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = status;
    }
  }

  updateTestStatus(taskId: number, testId: number, completed: boolean) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const test = task.tests.find(t => t.id === testId);
      if (test) {
        test.completed = completed;
        this.updateTaskStatusBasedOnTests(task);
      }
    }
  }

  addTestToTask(taskId: number, description: string) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const newTest: Test = {
        id: task.tests.length + 1,
        description,
        completed: false,
      };
      task.tests.push(newTest);
      this.updateTaskStatusBasedOnTests(task);
    }
  }

  private updateTaskStatusBasedOnTests(task: Task) {
    const allTestsCompleted = task.tests.every(test => test.completed);
    const someTestsCompleted = task.tests.some(test => test.completed);

    if (allTestsCompleted) {
      task.status = 'completed';
    } else if (someTestsCompleted) {
      task.status = 'in-progress';
    } else {
      task.status = 'just-started';
    }
  }
  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(task => task.status === 'completed').length;
  }

  getInProgressTasks(): number {
    return this.tasks.filter(task => task.status === 'in-progress').length;
  }

  getJustStartedTasks(): number {
    return this.tasks.filter(task => task.status === 'just-started').length;
  }

  getTotalTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.length, 0);
  }

  getCompletedTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.filter(test => test.completed).length, 0);
  }

  getInProgressTests(): number {
    return this.tasks.reduce((total, task) => total + task.tests.filter(test => !test.completed).length, 0);
  }
}