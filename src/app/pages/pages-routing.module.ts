import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { TDDComponent } from './TDD/tdd/tdd.component';
import { ItemListComponent } from './dynamic/item-list/item-list.component';
import { HeaderComponent } from './header/header/header.component';
import { CalenderComponent } from './header/header/calender/calender/calender.component';
import { StatisticsComponent } from './header/header/statistics/statistics/statistics.component';
import { ListTasksComponent } from './Task/list-tasks/list-tasks.component';
import { CardDetailsComponent } from './Task/card-details/card-details.component';
import { TestComponent } from './header/header/testManager/test/test.component';
import { AddttComponent } from './Task/t/addtt/addtt.component';
import { ImageUploadComponent } from './dynamic/upload/image-upload/image-upload.component';
import { KpiComponent } from './header/header/Kpi/kpi/kpi.component';
import { ProjectComponent } from './header/header/Project/project/project.component';
import { ArchiveComponent } from './header/header/Archive/archive/archive.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'agile/tdd',
      component: HeaderComponent,
      children: [
        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
        { path: 'Statistics', component: KpiComponent },
        { path: 'Tdd', component: TDDComponent },
        { path: 'dynamic', component: ItemListComponent },
        { path: 'Calender', component: CalenderComponent },
        { path: 'add', component: AddttComponent },
        { path: 'listTasks', component: ListTasksComponent },
        { path: 'taskDetail', component: CardDetailsComponent },
        { path: 'Test', component: TestComponent },
        { path: 'upload', component: ImageUploadComponent },
        { path: 'Project', component: ProjectComponent },
        { path: 'Archive', component: ArchiveComponent },





       
      ],
    },
  
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
