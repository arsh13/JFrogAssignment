import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DependancyGraphComponent } from './dependancy-graph/dependancy-graph.component';
import { DisplayCveComponent } from './display-cve/display-cve.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dependancy-graph',
    pathMatch: 'full'
  },
  {
    path: 'dependancy-graph',
    component: DependancyGraphComponent,
  },
  {
    path: 'cve-details',
    component: DisplayCveComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }