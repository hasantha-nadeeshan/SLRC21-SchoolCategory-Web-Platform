import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import {EasyTasksComponent} from './easy-tasks/easy-tasks.component'
import {TaskPageComponent} from './task-page/task-page.component'
const routes: Routes = [
  {
    path:'',
    component: EasyTasksComponent
  },
  {
    path:'question',
    component:TaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
