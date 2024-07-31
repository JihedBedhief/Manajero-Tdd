import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbMenuModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbUserModule,NbSelectModule,NbLayoutModule,NbThemeModule,NbDatepickerModule,NbCheckboxModule } from '@nebular/theme';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { BrowserModule } from '@angular/platform-browser'; 
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TDDComponent } from './TDD/tdd/tdd.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { StepperComponent } from './TDD/tdd/stepper/stepper.component';
import { ItemListComponent } from './dynamic/item-list/item-list.component';
import { AddSectionComponent } from './dynamic/AddSection/add-section/add-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import { UpdateSectionComponent } from './dynamic/UpdateSection/update-section/update-section.component';
import { AddAccordionComponent } from './dynamic/AddAccordion/add-accordion/add-accordion.component';
import { AupdateAccordionComponent } from './dynamic/UpdateAccordion/aupdate-accordion/aupdate-accordion.component';
import { AddStepComponent } from './dynamic/AddStep/add-step/add-step.component';
import { ProjectComponent } from './project/project.component';
import { AddTaskComponent } from './Task/add-task/add-task.component';
import { UpdateTaskComponent } from './Task/update-task/update-task.component';
import { TaskListComponent } from './Task/task-list/task-list.component';
import { TaskDetailComponent } from './Task/task-detail/task-detail.component';
import { DndModule } from 'angular-drag-and-drop-lists';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanBoardComponent } from './Task/kanban-board/kanban-board.component';


@NgModule({
  imports: [
    PagesRoutingModule,
  //  BrowserModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ThemeModule,
    NbTabsetModule,
  
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    NbSelectModule,
    NbLayoutModule,
    NbThemeModule,
    NbDatepickerModule,
    NbCheckboxModule,
    DragDropModule,
    BsDatepickerModule.forRoot(),
    
  ],
  
  declarations: [
    PagesComponent,
    TDDComponent,
    StepperComponent,
    ItemListComponent,
    AddSectionComponent,
    UpdateSectionComponent,
    AddAccordionComponent,
    AupdateAccordionComponent,
    AddStepComponent,
    ProjectComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    KanbanBoardComponent,

  ],
  
})
export class PagesModule {
}
