import { Component, OnInit } from '@angular/core';
import { ExpenseService } from "../../services/expense.service";
import { IncomeService } from "../../services/income.service";
import { FlatsService } from "../../services/flats.service";
import { OwnerService } from "../../services/owner.service";
import { owner_class } from "../../services/classes/owner";
import { meeting } from "../../services/classes/meeting";
import { MeetingService } from "../../services/meeting.service";
import { ComplaintService } from "../../services/complaint.service";
import { complaint_Class } from '../../services/classes/complaint';


@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css'],
})
export class DashoardComponent implements OnInit {
  i:number;
  ownercount:number=0;
  expenses:number=0;
  incomes:number=0;
  flatcount:number=0;
  meetingarr:meeting[]=[];
  comparr:complaint_Class[]=[];
  msg:string;
  compmsg:string;
  strstatus:string;

    constructor(private compser:ComplaintService, private flatser:FlatsService,private ownerser:OwnerService,private expenseser:ExpenseService,private incomeser:IncomeService,private meetingser:MeetingService) { }
  
    ngOnInit() {
      this.ownerser.getAllOwner().subscribe(
        (data:owner_class[])=>{
           console.log(data);
         for(this.i=0;this.i<data.length;this.i++)
         {
  
           if(data[this.i].active && data[this.i].name!="admin")
           {
             this.ownercount++;
           }
         }
        }
      );
  
      //expense
      this.expenseser.getExpDetail().subscribe(
        (data:any)=>{
         var todaydt=new Date().toString();
         console.log(todaydt.substring(11,15));
  
         for(this.i=0;this.i<data.length;this.i++)
         {
            console.log(data[this.i].date.toString().substring(6,10));
            if(todaydt.substring(11,15)==data[this.i].date.toString().substring(6,10))
                  this.expenses+=data[this.i].amount;
         }
         console.log(this.expenses);
  
        }
      );
      //income
  
      this.incomeser.getallincome().subscribe(
        (data:any)=>{
         var todaydt=new Date().toString();
         console.log(todaydt.substring(11,15));
  
         for(this.i=0;this.i<data.length;this.i++)
         {
            console.log(data[this.i].date.toString().substring(6,10));
            if(todaydt.substring(11,15)==data[this.i].date.toString().substring(6,10))
                  this.incomes+=data[this.i].amount;
         }
         console.log(this.incomes);
  
        }
      );
  
      //vacantflat
  
      this.flatser.getvacantflats().subscribe(
        (data:any)=>{
          for(this.i=0;this.i<data.length;this.i++)
          {
            this.flatcount++;
          }
          console.log(this.flatcount);
        }
      );
  
      this.meetingser.getUpcomingMeeting().subscribe(
        (data:any)=>
        {
          if(data.length>0)
          {
           console.log(data);
           this.meetingarr=data;
           console.log(this.meetingarr);
          }
          else{
                  this.msg="No Upcoming Meetings!!"
                  console.log(this.msg);
          }
  
        }
      );
  
      this.compser.getallcomplaint().subscribe(
        (data:complaint_Class[])=>
        {
          if(data.length>0)
          {
           console.log(data);
           for(this.i=0;this.i<data.length;this.i++) 
          {
            if(data[this.i].status===0||data[this.i].status===1){
              this.comparr.push(data[this.i]);
            }
            
          }
           console.log(this.comparr);
          }
          else{
                  this.compmsg="No Pending or In-Progress Complaints!!"
                  console.log(this.compmsg);
          }
  
        }
      );
  
    }

}
