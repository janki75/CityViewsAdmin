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
todaydt:string;
month:string;
year:string;
finaltodaydt:string;
fmonth:string;
msg1:string;
msg2:string;
active:boolean;

  ngOnInit() {





  }
  addItem()
  {
           const data = {
            startTime : this.startTime,
            endTime : this.endTime,
            topic : this.topic,
            agenda : this.agenda,
            minutesOfMeeting : this.minutesOfMeeting,
            active:true
           }
           console.log(this.startTime);
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
    this._meetserv.addMeeting(data).subscribe(
      (data:meeting)=>{

         console.log(data);
      }
    );
    this.msg = "Meeting is arranged successfully!!"
  }
  else{
    this.msg="Meeting should be completed on same day !";
    this.msg1="Endtime should be greater than Starttime !";
    this.msg2="Starttime should not be less than today's date !"

  }


    }

    cancel()
    {
      this._route.navigate(['/dashboard/meeting']);
    }


}
