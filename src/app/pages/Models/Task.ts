export interface Task {
    id: number;
    title: string;
    name:string,
    status: 'done' | 'To do' | 'in Progress';
    tests: Test[];
  }


  export interface Test {
    id: number;
    description: string;
    completed: boolean;
  }
  