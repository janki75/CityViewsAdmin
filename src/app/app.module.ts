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
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatPaginator,
  MatPaginatorModule
} from "@angular/material";
import { EditmeetingComponent } from './views/editmeeting/editmeeting.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { ManageemployeepositionComponent } from './views/manageemployeeposition/manageemployeeposition.component';
import { EditemployeepositionComponent } from './views/editemployeeposition/editemployeeposition.component';
import { AddemployeepositionComponent } from './views/addemployeeposition/addemployeeposition.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { UpdateemployeeComponent } from './views/updateemployee/updateemployee.component';
import {MatSelectModule} from '@angular/material/select';
import { AddemployeeComponent } from './views/addemployee/addemployee.component';
import { EditupcomingmeetingsComponent } from './views/editupcomingmeetings/editupcomingmeetings.component';
import { FlatsComponent } from './views/flats/flats.component';
import { AddflatsComponent } from './views/addflats/addflats.component';
import { ExpenseComponent } from './views/expense/expense.component';
import { MonthlyexpenseComponent } from './views/monthlyexpense/monthlyexpense.component';
import { ViewmonthlyexpenseComponent } from './views/viewmonthlyexpense/viewmonthlyexpense.component';
import { AddexpenseComponent } from './views/addexpense/addexpense.component';
import { ViewyearlyexpenseComponent } from './views/viewyearlyexpense/viewyearlyexpense.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { AddmaintenanceComponent } from './views/addmaintenance/addmaintenance.component';
import { EditmaintenanceComponent } from './views/editmaintenance/editmaintenance.component';
import { DuemaintenanceComponent } from './views/duemaintenance/duemaintenance.component';
import { FlatOwnerDetailsComponent } from './views/flat-owner-details/flat-owner-details.component';
import { AssignownertoflatComponent } from './views/assignownertoflat/assignownertoflat.component';
import { EditflatComponent } from './views/editflat/editflat.component';
import { FundsComponent } from './views/funds/funds.component';
import { AddfundComponent } from './views/addfund/addfund.component';
import { UpdatefundComponent } from './views/updatefund/updatefund.component';
import { OwnerComponent } from './views/owner/owner.component';
import { AddownerComponent } from './views/addowner/addowner.component';
import { SalaryComponent } from './views/salary/salary.component';
import { ViewmonthlysalaryComponent } from './views/viewmonthlysalary/viewmonthlysalary.component';
import { ElectionComponent } from './views/election/election.component';
import { UpcomingelectionComponent } from './views/upcomingelection/upcomingelection.component';
import { UpdatemonthlysalaryComponent } from './views/updatemonthlysalary/updatemonthlysalary.component';
import { AddsalaryComponent } from './views/addsalary/addsalary.component';
import { ElectionpositionComponent } from './views/electionposition/electionposition.component';
import { AddelectionpositionComponent } from './views/addelectionposition/addelectionposition.component';
import { EditelectionpositionComponent } from './views/editelectionposition/editelectionposition.component';
import { ViewpastelectionComponent } from './views/viewpastelection/viewpastelection.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ViewresultsComponent } from './views/viewresults/viewresults.component';
import { LoginComponent } from './views/login/login.component';

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
    EmployeeComponent,
    UpdateemployeeComponent,
    AddemployeeComponent,
    EditupcomingmeetingsComponent,
    FlatsComponent,
    AddflatsComponent,
    ExpenseComponent,
    MonthlyexpenseComponent,
    ViewmonthlyexpenseComponent,
    AddexpenseComponent,
    ViewyearlyexpenseComponent,
    MaintenanceComponent,
    AddmaintenanceComponent,
    EditmaintenanceComponent,
    DuemaintenanceComponent,

    FlatOwnerDetailsComponent,
    AssignownertoflatComponent,
    EditflatComponent,
    FundsComponent,
    AddfundComponent,
    UpdatefundComponent,
    OwnerComponent,
    AddownerComponent,
    SalaryComponent,
    ViewmonthlysalaryComponent,
    ElectionComponent,
    UpcomingelectionComponent,
    UpdatemonthlysalaryComponent,
    AddsalaryComponent,
    ViewpastelectionComponent,
    ViewresultsComponent,
    ElectionpositionComponent,
    AddelectionpositionComponent,
    EditelectionpositionComponent,
    ViewpastelectionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  MatIconModule,

  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
