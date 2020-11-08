import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './views/meeting/meeting.component';
import { HeaderComponent } from './components/header/header.component';
import { PastmeetingComponent } from './views/pastmeeting/pastmeeting.component';
import { UpcomingmeetingComponent } from './views/upcomingmeeting/upcomingmeeting.component';
import { AddmeetingComponent } from './views/addmeeting/addmeeting.component';
import { EditmeetingComponent } from './views/editmeeting/editmeeting.component';
import { ComplaintComponent } from './views/complaint/complaint.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { UpdateemployeeComponent } from './views/updateemployee/updateemployee.component';
import { AddemployeeComponent } from './views/addemployee/addemployee.component';

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
      path: "dashboard/complaint",
      component:ComplaintComponent
    },
    {
      path: "dashboard/employee",
      component:EmployeeComponent
    },
    {
      path: "dashboard/employee/updateemployee",
      component:UpdateemployeeComponent
    },
    {
      path: "dashboard/employee/addemployee",
      component:AddemployeeComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
