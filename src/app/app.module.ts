import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlrcFooterComponent } from './slrc-footer/slrc-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EasyTasksComponent } from './easy-tasks/easy-tasks.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { OverallProgressComponent } from './overall-progress/overall-progress.component';
import { SlrcHrTimelineComponent } from './slrc-hr-timeline/slrc-hr-timeline.component';
import { SvgTimelineComponent } from './svg-timeline/svg-timeline.component';
import { SponsorsBannersComponent } from './sponsors-banners/sponsors-banners.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubmissionComponent } from './submission/submission.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverallLeaderboardComponent } from './overall-leaderboard/overall-leaderboard.component';
import { VeiwTaskComponent } from './veiw-task/veiw-task.component';
import { UnitasksComponent } from './unitasks/unitasks.component';
import { UnioverallComponent } from './unioverall/unioverall.component';
import { SignInUniComponent } from './sign-in-uni/sign-in-uni.component';
import { UniLeaderboardComponent } from './uni-leaderboard/uni-leaderboard.component';
import { VeiwuniComponent } from './veiwuni/veiwuni.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import { RobotAnimationComponent } from './robot-animation/robot-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    SlrcFooterComponent,
    NavbarComponent,
    HomeComponent,
    EasyTasksComponent,
    TaskPageComponent,
    OverallProgressComponent,
    SlrcHrTimelineComponent,
    SvgTimelineComponent,
    SponsorsBannersComponent,
    SpinnerComponent,
    SignInComponent,
    SubmissionComponent,
    LeaderBoardComponent,
    OverallLeaderboardComponent,
    VeiwTaskComponent,
    UnitasksComponent,
    UnioverallComponent,
    SignInUniComponent,
    UniLeaderboardComponent,
    VeiwuniComponent,
    LiveStreamingComponent,
    RobotAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
