import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { meeting } from 'src/app/services/classes/meeting';
import { Route, Router } from '@angular/router';

  
@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {

  constructor(private _route:Router,private _meetserv:MeetingService) { }
   meetingId:number;
  startTime:string;
  endTime:string;
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
var startsub=this.startTime.substring(0,10);
var endsub=this.endTime.substring(0,10);
console.log(startsub);
  if(this.endTime>this.startTime && startsub==endsub)
  {
    this._meetserv.addMeeting(data).subscribe(
      (data:meeting)=>{

         console.log(data);
      }
    );
    this.msg = "Meeting is arranged successfully!!"
  }
  else{
    this.msg="Meeting should be completed on same day and Endtime should be greater than Starttime !!";

  }


    }

    cancel()
    {
      this._route.navigate(['/dashboard/meeting']);
    }


}
