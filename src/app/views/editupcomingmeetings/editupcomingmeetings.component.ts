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
  todaydt:string;
  month:string;
  year:string;
  finaltodaydt:string;
  fmonth:string;
  msg1:string;
  msg2:string;
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
    this.todaydt=new Date().toString();
    console.log(this.todaydt);
    console.log(this.todaydt.substring(8,10));
    var month=new Date().getMonth()+1;
    console.log(month);

    this.year=new Date().getFullYear().toString();
    console.log(this.year);
    this.finaltodaydt=this.todaydt.substring(8,10)+"/"+month+"/"+this.year;
    console.log(this.finaltodaydt);
    console.log(startsub);
      if(this.endTime>this.startTime && startsub==endsub && startsub>=this.finaltodaydt)
      {
    this._meetserv.editMeeting(new meeting(this.meetingId,this.startTime,this.endTime,this.topic,this.agenda,this.minutesOfMeeting)).subscribe(
      (data:any)=>{


      }
    );
    alert("Meeting updated successfully!");
    this._route.navigate(['/dashboard/meeting/upcomingmeeting']);
  }
  else{
    this.msg="Meeting should be completed on same day !";
    this.msg1="Endtime should be greater than Starttime !";
    this.msg2="Starttime should not be less than today's date !" 
  }
  }


}
