import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EasyTasksComponent} from './easy-tasks/easy-tasks.component'
import {TaskPageComponent} from './task-page/task-page.component'
import { SignInComponent } from './sign-in/sign-in.component';
import{ OverallLeaderboardComponent } from './overall-leaderboard/overall-leaderboard.component'
import { AuthGuard } from './shared/guard/auth.guard';
import { VeiwTaskComponent } from './veiw-task/veiw-task.component'
import { UnitasksComponent } from './unitasks/unitasks.component';
import { UniLeaderboardComponent } from './uni-leaderboard/uni-leaderboard.component';
import { VeiwuniComponent } from './veiwuni/veiwuni.component';

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
  },
  {
    path:'SchoolLeaderboard',
    component: OverallLeaderboardComponent
  },
  {
    path: 'UniLeaderboard',
    component : UniLeaderboardComponent
  },
  {
    path:'viewTasksSchool',
    component: VeiwTaskComponent
  },
  {
    path:'viewTasksUniversity',
    component: VeiwuniComponent
  },
  {
    path: 'unitask',
    component: UnitasksComponent,canActivate: [AuthGuard]
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
