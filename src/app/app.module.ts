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
import { TaskDescriptionComponent } from './task-description/task-description.component';
import{AngularFireStorageModule} from '@angular/fire/storage'


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
    TaskDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
