import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbLayoutModule, NbListModule, NbMenuModule, NbOptionModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbThemeModule, NbUserModule } from '@nebular/theme';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { TaskCardComponent } from './Task/task-card/task-card.component';
import { CardDetailsComponent } from './Task/card-details/card-details.component';

import { UpdateTaskComponent } from './Task/update-task/update-task.component';
import { TestComponent } from './header/header/testManager/test/test.component';
import { AddTestComponent } from './header/header/testManager/test/AddTest/add-test/add-test.component';
import { UpdateTestComponent } from './header/header/testManager/test/UpdateTest/update-test/update-test.component';
import { AddttComponent } from './Task/t/addtt/addtt.component';
import { ImageUploadComponent } from './dynamic/upload/image-upload/image-upload.component';
import { KpiComponent } from './header/header/Kpi/kpi/kpi.component';





@NgModule({
  imports: [
    PagesRoutingModule,
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
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NbOptionModule,
    NbDatepickerModule.forRoot(),
    NbCheckboxModule,
    FormsModule,


    
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
    UpdateTaskComponent,
    TestComponent,
    AddTestComponent,
    UpdateTestComponent,
    AddttComponent,
    ImageUploadComponent,
    KpiComponent,
   
    


  ],
})
export class PagesModule {
}
