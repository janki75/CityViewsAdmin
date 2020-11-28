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


msg1:string;
msg2:string;
active:boolean;
todaydt:any;
finaltodaydt:any;

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


console.log(ehour==sthour && emin>stmin && esec>=ssec);
  // if(this.endTime>this.startTime && startsub==endsub && startsub>=this.finaltodaydt)
  if(sday==endday && smonth==endmonth && syear==endyear && sday>=day && smonth>=newmonth && syear>=year)
  {

    if((ehour==sthour && emin>stmin && esec>=ssec)|| ehour>sthour )
    {

      this._meetserv.addMeeting(data).subscribe(
        (data:meeting)=>{

           console.log(data);
        }
      );
      this.msg = "Meeting is arranged successfully!!"
    }
    else{
      alert("Check your time.Endtime should not be less than Starttime of meeting!");
    }

  }
  else{

     alert("Check your date.It should not be less than today's date and meeting must be completed on the same day");

  }


    }

    cancel()
    {
      this._route.navigate(['/dashboard/meeting']);
    }


}
