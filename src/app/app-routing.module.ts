import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagerComponent } from './project-manager/project-manager.component';

const routes: Routes = [
  {
    path: 'manager',
    component: ProjectManagerComponent
  },
  {
    path: '**',
    redirectTo: '/manager',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
