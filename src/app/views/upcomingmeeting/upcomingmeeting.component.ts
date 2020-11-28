import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MeetingService } from '../../services/meeting.service';
import { Router } from '@angular/router';
import { meeting } from '../../services/classes/meeting';


@Component({
  selector: 'app-upcomingmeeting',
  templateUrl: './upcomingmeeting.component.html',
  styleUrls: ['./upcomingmeeting.component.css']
})
export class UpcomingmeetingComponent implements OnInit {
  items : any[] = [];
  arr : any[] = [];
  i : number;
  id:number;
  msg:string="No records are there!!";
  displayedColumns: string[] = ['agenda', 'topic', 'minutesOfMeeting', 'startTime' , 'endTime','action'];
  dataSource = new MatTableDataSource;


  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public _meetingserv:MeetingService,private _route:Router) { }

  ngOnInit() {
    this._meetingserv.getUpcomingMeeting()
    .subscribe((res:any) => {
    console.log(res);
      this.arr = res;
      if(this.arr.length > 0){
        for(this.i = 0 ;this.i < this.arr.length;this.i++){
          if(this.arr[this.i].active==true)
          {
            let startdate = new Date(this.arr[this.i].startTime);
            let enddate = new Date(this.arr[this.i].endTime);
            let d = startdate.getDate() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getFullYear() + " " + startdate.getHours() + ":" + startdate.getMinutes() + ":" + startdate.getSeconds();
            let d1 = enddate.getDate() + "-" + (enddate.getMonth() + 1 )+ "-" + enddate.getFullYear()  + " " + enddate.getHours() + ":" + enddate.getMinutes() + ":" + enddate.getSeconds();
            const data1 = {meetingId:res[this.i].meetingId,agenda:res[this.i].agenda,topic:res[this.i].topic,minutesOfMeeting:res[this.i].minutesOfMeeting,startTime:d,endTime:d1}
            this.items.push(data1);
            this.dataSource.data = this.items;
          }

        }
      }
    })

  }
  onedit(element:meeting)
  {
   console.log(element.meetingId);
   this._route.navigate(["dashboard/meeting/editupcomingmeeting",element.meetingId]);
  }
  ondelete(id)
  {
    console.log(id);
    this.id=id;
  }
  onmodaldel(){
    this._meetingserv.deletemeeting(this.id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );

    this._route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._route.onSameUrlNavigation = "reload";

    location.reload();
  }


}
