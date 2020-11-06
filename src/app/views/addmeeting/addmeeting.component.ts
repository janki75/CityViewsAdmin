import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { meeting } from 'src/app/services/classes/meeting';

  import * as moment from 'moment';
@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {

  constructor(private _meetserv:MeetingService) { }
   meetingId:number;
  startTime:any;
  endTime:any;
  topic:string;
  agenda:string;
  minutesOfMeeting:string;
  startdate:any;
d:string;
d1:string;
msg:string;

  ngOnInit() {
  }
  addItem()
  {
           const data = {
            startTime : this.startTime,
            endTime : this.endTime,
            topic : this.topic,
            agenda : this.agenda,
            minutesOfMeeting : this.minutesOfMeeting
           }

     this._meetserv.addMeeting(data).subscribe(
       (data:meeting)=>{

          console.log(data);
       }
     );
     this.msg = "Meeting is arranged successfully!!"
  }

}
