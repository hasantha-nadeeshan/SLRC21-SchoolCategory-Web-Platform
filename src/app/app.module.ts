import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlrcFooterComponent } from './slrc-footer/slrc-footer.component';
import { SlrcTimelineComponent } from './slrc-timeline/slrc-timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EasyTasksComponent } from './easy-tasks/easy-tasks.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { OverallProgressComponent } from './overall-progress/overall-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    SlrcFooterComponent,
    SlrcTimelineComponent,
    NavbarComponent,
    HomeComponent,
    EasyTasksComponent,
    TaskPageComponent,
    OverallProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
