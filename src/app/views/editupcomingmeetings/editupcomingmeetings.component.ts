import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { meeting } from '../../services/classes/meeting';

@Component({
  selector: 'app-editupcomingmeetings',
  templateUrl: './editupcomingmeetings.component.html',
  styleUrls: ['./editupcomingmeetings.component.css']
})
export class EditupcomingmeetingsComponent implements OnInit {
  meetingId:number;
  startTime:any;
  endTime:any;
  topic:string;
  agenda:string;
  minutesOfMeeting:string;
  msg:string;
  constructor(private _meetserv:MeetingService,private _acroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.meetingId=x['id'];
        this._meetserv.getMeetingById(this.meetingId).subscribe(
        (data:meeting)=>{
          console.log(data);
          this.startTime=data.startTime;
          this.endTime=data.endTime;
          this.topic=data.topic;
          this.agenda=data.agenda;
          this.minutesOfMeeting=data.minutesOfMeeting;


        }
        );
      }
    );

  }
  updateItem(){
    var startsub=this.startTime.substring(0,10);
    var endsub=this.endTime.substring(0,10);
    console.log(startsub);
      if(this.endTime>this.startTime && startsub==endsub)
      {
    this._meetserv.editMeeting(new meeting(this.meetingId,this.startTime,this.endTime,this.topic,this.agenda,this.minutesOfMeeting)).subscribe(
      (data:any)=>{


      }
    );
    alert("Meeting updated successfully!");
    this._route.navigate(['/dashboard/meeting/upcomingmeeting']);
  }
  else{
    this.msg="Meeting should be completed on same day and Endtime should be greater than Starttime !!";
  }
  }


}
