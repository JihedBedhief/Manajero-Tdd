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
import { HeaderComponent } from './header/header/header.component';
import { CalenderComponent } from './header/header/calender/calender/calender.component';
import { ProjectComponent } from './Project/project.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StatisticsComponent } from './header/header/statistics/statistics/statistics.component';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { CardDetailsComponent } from './card-details/card-details.component';





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
    FullCalendarModule,
    DragDropModule,
    CommonModule,

    
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
    HeaderComponent,
    CalenderComponent,
    StatisticsComponent,
    CardDetailsComponent,
   
    


  ],
  
})
export class PagesModule {
}
