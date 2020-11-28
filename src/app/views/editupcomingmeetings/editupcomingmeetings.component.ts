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

  msg1:string;
  msg2:string;
  active:boolean;
  todaydt:any;
finaltodaydt:any;
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

    var sday=this.startTime.substring(0,2);
    console.log(sday);
    var smonth=this.startTime.substring(3,5);
    var syear=this.startTime.substring(6,10);
    console.log(smonth);
    console.log(syear);
    var endday=this.endTime.substring(0,2);
    var endmonth=this.endTime.substring(3,5);
    var endyear=this.endTime.substring(6,10);
    var sthour=this.startTime.substring(11,13);
    var stmin=this.startTime.substring(14,16);
    var ssec=this.startTime.substring(17,19);
    console.log(sthour);
    console.log(stmin);
    console.log(ssec);
    var ehour=this.endTime.substring(11,13);
    var emin=this.endTime.substring(14,16);
    var esec=this.endTime.substring(17,19);
    this.todaydt=new Date();
    var day = this.todaydt.getDate();
        var month=new Date().getMonth()+1;
        var newmonth=month.toString();
        var year=new Date().getFullYear().toString();
        this.finaltodaydt=day+"/"+month+"/"+year;


        if(sday==endday && smonth==endmonth && syear==endyear && sday>=day && smonth>=newmonth && syear>=year)
        {

          if((ehour==sthour && emin>stmin && esec>=ssec)|| ehour>sthour )
          {
    this._meetserv.editMeeting(new meeting(this.meetingId,this.startTime,this.endTime,this.topic,this.agenda,this.minutesOfMeeting,this.active)).subscribe(
      (data:any)=>{


      }
    );
    alert("Meeting updated successfully!");
    this._route.navigate(['/dashboard/meeting/upcomingmeeting']);
     }
     else{
      alert("Check your time.Endtime should not be less than Starttime of meeting!");
     }

      }

  else{
    alert("Check your date.It should not be less than today's date and meeting must be completed on the same day");
  }
  }


}
