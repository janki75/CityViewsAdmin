import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { meeting } from 'src/app/services/classes/meeting';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {

  constructor(private _meetserv:MeetingService) { }
   meetingId:number;
  startTime:Date;
  endTime:Date;
  topic:string;
  agenda:string;
  minutesOfMeeting:string;


  ngOnInit() {
  }
  addItem()
  {
   
  
  // let startdate = new Date(this.startTime);
  //         let enddate = new Date(this.endTime);
  //         let d = startdate.getDate() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getFullYear() + " " + startdate.getHours() + ":" + startdate.getMinutes() + ":" + startdate.getSeconds();
  //         let d1 = enddate.getDate() + "-" + (enddate.getMonth() + 1 )+ "-" + enddate.getFullYear()  + " " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds();
 
  
    // this._meetserv.addMeeting(new meeting(this.meetingId,d,d1,this.topic,this.agenda,this.minutesOfMeeting)).subscribe(
    //   (data:meeting)=>{
       
    //     // console.log(data);
    //   }
    // );
  }

}
