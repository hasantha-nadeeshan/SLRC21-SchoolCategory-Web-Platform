import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlrcFooterComponent } from './slrc-footer/slrc-footer.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { SlrcTimelineComponent } from './slrc-timeline/slrc-timeline.component';
import { SLRCHorizontalTimelineComponent } from './slrc-horizontal-timeline/slrc-horizontal-timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EasyTasksComponent } from './easy-tasks/easy-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SlrcFooterComponent,
    TimeLineComponent,
    SlrcTimelineComponent,
    SLRCHorizontalTimelineComponent,
    NavbarComponent,
    HomeComponent,
    EasyTasksComponent
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
