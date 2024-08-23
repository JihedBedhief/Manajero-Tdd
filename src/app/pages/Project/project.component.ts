import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'ngx-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectsComponent implements OnInit{

  projects: any[] = [];
  t: any[] = [];


  
  ngOnInit() {
  
    this.getAllProjects();
  }

  constructor(private _dialogue: MatDialog,private _project:ProjectService,
    private router: Router
  ){
  }

  getAllProjects() {
    this._project.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });
  }

  // viewTasks(id: string) {
  //   console.log(id);
  //   this.router.navigate(['/projects/', id, '/tasks']);
  // }
  
 


  



}
