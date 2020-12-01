import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(public _route:Router,public _meetingserv:MeetingService) { }

  ngOnInit() {
    
  }
  addmeeting()
  {
    this._route.navigate(['dashboard/meeting/addmeeting']);
  }

}
