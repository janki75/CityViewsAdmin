import { EditmaintenanceComponent } from './views/editmaintenance/editmaintenance.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { ManageemployeepositionComponent } from './views/manageemployeeposition/manageemployeeposition.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './views/meeting/meeting.component';
import { HeaderComponent } from './components/header/header.component';
import { PastmeetingComponent } from './views/pastmeeting/pastmeeting.component';
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';
import { AddmeetingComponent } from './views/addmeeting/addmeeting.component';
import { EditmeetingComponent } from './views/editmeeting/editmeeting.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EditemployeepositionComponent } from './views/editemployeeposition/editemployeeposition.component';
import { AddemployeepositionComponent } from './views/addemployeeposition/addemployeeposition.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { UpdateemployeeComponent } from './views/updateemployee/updateemployee.component';
import { AddemployeeComponent } from './views/addemployee/addemployee.component';
import { EditupcomingmeetingsComponent } from './views/editupcomingmeetings/editupcomingmeetings.component';
import { IncomeComponent } from "./views/income/income.component";
import { UpdateincomeComponent } from './views/updateincome/updateincome.component';
import { AddincomeComponent } from './views/addincome/addincome.component';
import { FlatsComponent } from './views/flats/flats.component';
import { AddflatsComponent } from './views/addflats/addflats.component';
import { ExpenseComponent } from './views/expense/expense.component';
import { MonthlyexpenseComponent } from './views/monthlyexpense/monthlyexpense.component';
import { ViewmonthlyexpenseComponent } from './views/viewmonthlyexpense/viewmonthlyexpense.component';
import { AddexpenseComponent } from './views/addexpense/addexpense.component';
import { ViewyearlyexpenseComponent } from './views/viewyearlyexpense/viewyearlyexpense.component';
import { AddmaintenanceComponent } from './views/addmaintenance/addmaintenance.component';
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
import { UpdatemonthlysalaryComponent } from './views/updatemonthlysalary/updatemonthlysalary.component';
import { AddsalaryComponent } from './views/addsalary/addsalary.component';
import { ElectionpositionComponent } from './views/electionposition/electionposition.component';
import { AddelectionpositionComponent } from './views/addelectionposition/addelectionposition.component';
import { EditelectionpositionComponent } from './views/editelectionposition/editelectionposition.component';
import { DashoardComponent } from './views/dashoard/dashoard.component';
import { ElectionComponent } from './views/election/election.component';
import { ViewpastelectionComponent } from './views/viewpastelection/viewpastelection.component';
import { ViewresultsComponent } from './views/viewresults/viewresults.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
    {
      path:'',
      component:LoginComponent,
    },
    {
      path: "dashboard",
      component: HeaderComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting",
      component: MeetingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/pastmeeting",
      component: PastmeetingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/flats",
      component: FlatsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/flats/assignowner/:id",
      component: AssignownertoflatComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/addflats",
      component: AddflatsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/editflat/:id",
      component: EditflatComponent,
      canActivate:[AuthGuardService]
    },
    {
path:"dashboard/flats/ownerdetail/:id",
component:FlatOwnerDetailsComponent,
canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/upcomingmeeting",
      component: UpcomingmeetingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/addmeeting",
      component: AddmeetingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/editmeet/:id",
      component: EditmeetingComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/meeting/editupcomingmeeting/:id",
      component: EditupcomingmeetingsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/complaint",
      component:ComplaintComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/employeeposition",
      component:ManageemployeepositionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'dashboard/employeeposition/editemployeeposition/:id',
      component:EditemployeepositionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'dashboard/employeeposition/addemployeepositionComponent',
      component:AddemployeepositionComponent,
      canActivate:[AuthGuardService]

    },
    {
      path: "dashboard/employee/updateemployee",
      component:UpdateemployeeComponent,
      canActivate:[AuthGuardService]
    },
  {
    path: "dashboard/employee",
    component:EmployeeComponent,
    canActivate:[AuthGuardService]
  },
    {
      path: "dashboard/employee/addemployee",
      component:AddemployeeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/income",
      component:IncomeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/income/updateincome/:id",
      component: UpdateincomeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/income/addincome",
      component:AddincomeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/expenses",
      component:ExpenseComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/expenses/monthlyexpenses",
      component:MonthlyexpenseComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/expenses/monthlyexpenses/viewmonthlyexpenses",
      component:ViewmonthlyexpenseComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/expenses/addexpense",
      component:AddexpenseComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/expenses/yearlyexpenses",
      component:ViewyearlyexpenseComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/maintenance",
      component:MaintenanceComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/addmaintenance",
      component:AddmaintenanceComponent
    },
    {
      path: "dashboard/editmaintenance/:id",
      component:EditmaintenanceComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:"dashboard/duemaintenance",
      component:DuemaintenanceComponent,
      canActivate:[AuthGuardService]

    },
    {
      path: "dashboard/funds",
      component:FundsComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/funds/addfund",
      component:AddfundComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/funds/updatefund",
      component:UpdatefundComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/owner",
      component:OwnerComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/owner/addowner",
      component:AddownerComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/salary",
      component:SalaryComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/salary/addsalary",
      component:AddsalaryComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/salary/viewmonthlysalary",
      component:ViewmonthlysalaryComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/salary/viewmonthlysalary/updatemonthlysalary",
      component:UpdatemonthlysalaryComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/election",
      component:ElectionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/electionposition",
      component:ElectionpositionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/electionposition/addelectionposition",
      component:AddelectionpositionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/electionposition/editelectionposition/:id",
      component:EditelectionpositionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/election/pastelection",
      component:ViewpastelectionComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: "dashboard/election/pastelection/viewresults",
      component:ViewresultsComponent,
      canActivate:[AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
