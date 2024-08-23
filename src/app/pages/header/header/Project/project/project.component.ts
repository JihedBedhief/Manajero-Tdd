import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../../../../../services/project/project.service';
import { AddProjectComponent } from '../AddProject/add-project/add-project.component';
import { UpdateProjectComponent } from '../UpdateProject/update-project/update-project.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

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
  
  openAddProject() {
    this._dialogue.open(AddProjectComponent);
  }

  openUpdate(id: any) {
    this._dialogue.open(UpdateProjectComponent, {
      data: { id: id }
    });
  }
  
  confirmDeleteProject(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteProject(id);
    }
  }

  deleteProject(id: number) {
    this._project.deleteProjectById(id).subscribe(res => {
      this.getAllProjects();
    });
  }


}
