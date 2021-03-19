import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EasyTasksComponent} from './easy-tasks/easy-tasks.component'
import {TaskPageComponent} from './task-page/task-page.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', pathMatch: 'full'
    
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path:'easyTask',
    component: EasyTasksComponent,canActivate: [AuthGuard]
  },
  {
    path:'question',
    component:TaskPageComponent,canActivate: [AuthGuard]
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
