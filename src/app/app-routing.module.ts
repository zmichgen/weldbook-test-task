import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { RxjstaskComponent } from './components/rxjstask/rxjstask.component';

const routes: Routes = [
  { path: 'task1', component: TableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'task1' },
  { path: 'task2', component: StartPageComponent },
  { path: 'task3', component: RxjstaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
