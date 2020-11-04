import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './views/meeting/meeting.component';
import { HeaderComponent } from './components/header/header.component';
import { PastmeetingComponent } from './views/pastmeeting/pastmeeting.component';

const routes: Routes = [
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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
