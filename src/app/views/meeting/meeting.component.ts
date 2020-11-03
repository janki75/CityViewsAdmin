import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(public _meetingserv:MeetingService) { }

  ngOnInit() {
    this._meetingserv.getMeetingById(2).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }

}
