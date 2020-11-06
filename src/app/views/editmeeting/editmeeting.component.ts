import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';
import { meeting } from 'src/app/services/classes/meeting';


@Component({
  selector: 'app-editmeeting',
  templateUrl: './editmeeting.component.html',
  styleUrls: ['./editmeeting.component.css']
})
export class EditmeetingComponent implements OnInit {
  meetingId:number;
  startTime:Date;
  endTime:any;
  topic:string;
  agenda:string;
  minutesOfMeeting:string;
  constructor(private _meetserv:MeetingService,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.meetingId=x['id'];
        this._meetserv.getMeetingById(this.meetingId).subscribe(
        (data:meeting)=>{
          console.log(data);
          // this.startTime=data.startTime;
          this.endTime=data.endTime;
          this.topic=data.topic;
          this.agenda=data.agenda;
          this.minutesOfMeeting=data.minutesOfMeeting;
          let d=this.startTime.toString().slice(0,11);
          let t=this.startTime.toString().slice(11,16);
          let temp=d+""+t;
          console.log(temp);
        }
        );
      }
    );
  

  }

}
