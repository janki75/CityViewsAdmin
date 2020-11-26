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
import { ElectionComponent } from './views/election/election.component';
import { UpdatemonthlysalaryComponent } from './views/updatemonthlysalary/updatemonthlysalary.component';
import { AddsalaryComponent } from './views/addsalary/addsalary.component';

const routes: Routes = [
    {
      path:'',
      component:HeaderComponent
    },
    {
      path: "dashboard",
      component: HeaderComponent
    },
    {
      path: "dashboard/meeting",
      component: MeetingComponent
    },
    {
      path: "dashboard/meeting/pastmeeting",
      component: PastmeetingComponent
    },
    {
      path: "dashboard/flats",
      component: FlatsComponent
    },
    {
      path: "dashboard/flats/assignowner/:id",
      component: AssignownertoflatComponent
    },
    {
      path: "dashboard/meeting/addflats",
      component: AddflatsComponent
    },
    {
      path: "dashboard/meeting/editflat/:id",
      component: EditflatComponent
    },
    {
path:"dashboard/flats/ownerdetail/:id",
component:FlatOwnerDetailsComponent
    },
    {
      path: "dashboard/meeting/upcomingmeeting",
      component: UpcomingmeetingComponent
    },
    {
      path: "dashboard/meeting/addmeeting",
      component: AddmeetingComponent
    },
    {
      path: "dashboard/meeting/editmeet/:id",
      component: EditmeetingComponent
    },
    {
      path: "dashboard/meeting/editupcomingmeeting/:id",
      component: EditupcomingmeetingsComponent
    },
    {
      path: "dashboard/complaint",
      component:ComplaintComponent
    },
    {
      path: "dashboard/employeeposition",
      component:ManageemployeepositionComponent
    },
    {
      path:'dashboard/employeeposition/editemployeeposition/:id',
      component:EditemployeepositionComponent
    },
    {
      path:'dashboard/employeeposition/addemployeepositionComponent',
      component:AddemployeepositionComponent

    },
    {
      path: "dashboard/employee/updateemployee",
      component:UpdateemployeeComponent
    },
  {
    path: "dashboard/employee",
    component:EmployeeComponent
  },
    {
      path: "dashboard/employee/addemployee",
      component:AddemployeeComponent
    },
    {
      path: "dashboard/expenses",
      component:ExpenseComponent
    },
    {
      path: "dashboard/expenses/monthlyexpenses",
      component:MonthlyexpenseComponent
    },
    {
      path: "dashboard/expenses/monthlyexpenses/viewmonthlyexpenses",
      component:ViewmonthlyexpenseComponent
    },
    {
      path: "dashboard/expenses/addexpense",
      component:AddexpenseComponent
    },
    {
      path: "dashboard/expenses/yearlyexpenses",
      component:ViewyearlyexpenseComponent
    },
    {
      path: "dashboard/maintenance",
      component:MaintenanceComponent
    },
    {
      path: "dashboard/addmaintenance",
      component:AddmaintenanceComponent
    },
    {
      path: "dashboard/editmaintenance/:id",
      component:EditmaintenanceComponent
    },
    {
      path:"dashboard/duemaintenance",
      component:DuemaintenanceComponent
     
    },
    {
      path: "dashboard/funds",
      component:FundsComponent
    },
    {
      path: "dashboard/funds/addfund",
      component:AddfundComponent
    },
    {
      path: "dashboard/funds/updatefund",
      component:UpdatefundComponent
    },
    {
      path: "dashboard/owner",
      component:OwnerComponent
    },
    {
      path: "dashboard/owner/addowner",
      component:AddownerComponent
    },
    {
      path: "dashboard/salary",
      component:SalaryComponent
    },
    {
      path: "dashboard/salary/addsalary",
      component:AddsalaryComponent
    },
    {
      path: "dashboard/salary/viewmonthlysalary",
      component:ViewmonthlysalaryComponent
    },
    {
      path: "dashboard/salary/viewmonthlysalary/updatemonthlysalary",
      component:UpdatemonthlysalaryComponent
    },
    {
      path: "dashboard/election",
      component:ElectionComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
