import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './views/meeting/meeting.component';
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { AddmeetingComponent } from './views/addmeeting/addmeeting.component';
import { FormsModule } from "@angular/forms";
=======
import { HeaderComponent } from './components/header/header.component';
import { PastmeetingComponent } from './views/pastmeeting/pastmeeting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';
>>>>>>> 15712ceb2cbc7d70ad54f0d2fc1d3d20052bc718
@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
<<<<<<< HEAD
    AddmeetingComponent
=======
    HeaderComponent,
    PastmeetingComponent,
    UpcomingmeetingComponent
>>>>>>> 15712ceb2cbc7d70ad54f0d2fc1d3d20052bc718
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
>>>>>>> 15712ceb2cbc7d70ad54f0d2fc1d3d20052bc718
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
