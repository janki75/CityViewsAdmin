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
import { MatPaginatorModule } from '@angular/material';
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule
} from "@angular/material";
import { EditmeetingComponent } from './views/editmeeting/editmeeting.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { UpdateemployeeComponent } from './views/updateemployee/updateemployee.component';
import {MatSelectModule} from '@angular/material/select';
import { AddemployeeComponent } from './views/addemployee/addemployee.component';
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
    EmployeeComponent,
    UpdateemployeeComponent,
    AddemployeeComponent,
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
    
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
