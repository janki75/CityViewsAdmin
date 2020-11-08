import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './views/meeting/meeting.component';
import { HttpClientModule } from "@angular/common/http";
import { AddmeetingComponent } from './views/addmeeting/addmeeting.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { PastmeetingComponent } from './views/pastmeeting/pastmeeting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatFormFieldModule,MatInputModule,MatSortModule,
  MatIconModule } from '@angular/material';
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';

import { EditmeetingComponent } from './views/editmeeting/editmeeting.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { ManageemployeepositionComponent } from './views/manageemployeeposition/manageemployeeposition.component';
import { EditemployeepositionComponent } from './views/editemployeeposition/editemployeeposition.component';
import { AddemployeepositionComponent } from './views/addemployeeposition/addemployeeposition.component';
import { EditupcomingmeetingsComponent } from './views/editupcomingmeetings/editupcomingmeetings.component';
@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    AddmeetingComponent,
    HeaderComponent,
    PastmeetingComponent,
    UpcomingmeetingComponent,
    EditmeetingComponent,
    ComplaintComponent,
    ManageemployeepositionComponent,
    EditemployeepositionComponent,
    AddemployeepositionComponent,
    EditupcomingmeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
