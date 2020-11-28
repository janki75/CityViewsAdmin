import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';
import { meeting } from 'src/app/services/classes/meeting';


@Component({
  selector: 'app-editmeeting',
  templateUrl: './editmeeting.component.html',
  styleUrls: ['./editmeeting.component.css']
})
export class EditmeetingComponent implements OnInit {
  meetingId:number;
  startTime:string;
  endTime:string;
  topic:string;
  agenda:string;
  minutesOfMeeting:string;
  msg:string;
  todaydt:string;
month:string;
year:string;
finaltodaydt:string;
fmonth:string;
msg1:string;
msg2:string;
active:boolean;
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
          this.active=data.active;



        }
        );
      }
    );


  }
  updateItem(){

    this._meetserv.editMeeting(new meeting(this.meetingId,this.startTime,this.endTime,this.topic,this.agenda,this.minutesOfMeeting,this.active)).subscribe(
      (data:any)=>{


      }
    );

    alert("Meeting updated successfully!")
    this._route.navigate(['/dashboard/meeting/pastmeeting']);


  }
  cancel()
  {
    this._route.navigate(['/dashboard/meeting']);
  }

}
