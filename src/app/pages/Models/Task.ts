export interface Task {
    id: string;
    title: string;
    name:string,
    project: string;
    assigned: string;
    description: string;
    comments: string;
    dueDate: Date;
    status: 'done' | 'To do' | 'in Progress';
    tests: Test[];
  }


  export interface Test {
    id: number;
    description: string;
    completed: boolean;
  }


  export interface Project {
    id: string;               
    name: string;             
    description: string;     
    startDate: Date;          
    endDate: Date;            
  }
  
  



  
 
  
  
 
  
  