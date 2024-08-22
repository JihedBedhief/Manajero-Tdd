import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../../../../../services/project/project.service';
import { AddProjectComponent } from '../AddProject/add-project/add-project.component';
import { UpdateProjectComponent } from '../UpdateProject/update-project/update-project.component';

@Component({
  selector: 'ngx-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: any[] = [];
  t: any[] = [];


  
  ngOnInit() {
  
    this.getAlltest();

  }

  constructor(private _dialogue: MatDialog,private _project:ProjectService){
  }

  getAlltest() {
    this._project.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });
  }


  openAddProject() {
    this._dialogue.open(AddProjectComponent);
  }

  openUpdate(id: any) {
    this._dialogue.open(UpdateProjectComponent, {
      data: { id: id }
    });
  }




  
  confirmDeleteTest(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteTest(id);
    }
  }

  deleteTest(id: number) {
    this._project.deleteProjectById(id).subscribe(res => {
      this.getAlltest();
    });
  }


}
