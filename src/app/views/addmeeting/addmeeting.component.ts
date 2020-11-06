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
<<<<<<< HEAD
  startTime:any;
  endTime:any;
=======
  startTime:string;
  endTime:string;
>>>>>>> 479fa3f491ac5af1ef79961d9d19a254de324455
  topic:string;
  agenda:string;
  minutesOfMeeting:string;
  startdate:any;
d:string;
d1:string;

  ngOnInit() {
  }
  addItem()
  {
<<<<<<< HEAD
   
  
          this.startdate = new Date(this.startTime);
           let enddate = new Date(this.endTime);
           this.d = this.startdate.getDate() + "/" + (this.startdate.getMonth() + 1) + "/" + this.startdate.getFullYear() + " " + this.startdate.getHours() + ":" + this.startdate.getMinutes() + ":" + this.startdate.getSeconds();
           this.d1 = enddate.getDate() + "/" + (enddate.getMonth() + 1 )+ "/" + enddate.getFullYear()  + " " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds();
           
           /*let date1 = moment(d).format('YYYY-MM-DD HH:mm:ss');
           let date2 = moment(d1).format('YYYY-MM-DD HH:mm:ss');
           let d2=this.startTime.toString().slice(0,11);
           let t=this.startTime.toString().slice(11,16);
           let temp=d2+""+t;
           console.log(temp);*/
           

           const data = {
            startTime : this.d,
            endTime : this.d1,
            topic : this.topic,
            agenda : this.agenda,
            minutesOfMeeting : this.minutesOfMeeting
           }

     this._meetserv.addMeeting(data).subscribe(
       (data:meeting)=>{
       
          console.log(data);
       }
     );
=======
    let startdate = new Date(this.startTime);
    let enddate = new Date(this.endTime);
          let d = startdate.getDate() + "/" + (startdate.getMonth() + 1) + "/" + startdate.getFullYear() + " " + "05" + ":" + "30"+ ":" + "05";
          let d1 = enddate.getDate() + "/" + (enddate.getMonth() + 1 )+ "/" + enddate.getFullYear()  + " " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds();

  this._meetserv.addMeeting(new meeting(this.meetingId,d,d,this.topic,this.agenda,this.minutesOfMeeting)).subscribe(
      (data:meeting)=>{
       
         console.log(data);
      }
    );
>>>>>>> 479fa3f491ac5af1ef79961d9d19a254de324455
  }

}
