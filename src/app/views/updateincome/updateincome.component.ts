import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { income } from '../../services/classes/income';

@Component({
  selector: 'app-updateincome',
  templateUrl: './updateincome.component.html',
  styleUrls: ['./updateincome.component.css']
})
export class UpdateincomeComponent implements OnInit {

  sub:any;
  incomeId:number;
  name:any;
  contactNo:any;
  date:string="";
  reason:any;
  amount:any;
  alldate:string[]=[];
  i:number;
  j:number;
  datebooked:string="";
  flag:number=0;
  currentdate:string;
  mindate:Date;
 
    constructor(private _incomeservice:IncomeService, private _acroute:ActivatedRoute, private _route : Router) {
      this.mindate=new Date();
     }
  
    ngOnInit() {
      this._acroute.params.subscribe(
        (x:Params)=>{
          this.incomeId=x['id'];
          this._incomeservice.getincomeById(this.incomeId).subscribe(
          (data:income)=>{
            console.log(data);
            this.amount=data.amount; 
            //this.date=data.date;
            this.reason=data.reason;
            this.name=data.name;
            this.contactNo=data.contactNo;
            this.currentdate=data.date;
          }
          );
        }
      );


      this._incomeservice.getallincome().subscribe(
        (data:income[])=>{
            this.i=0;
            console.log(data);
            for(this.i=0;this.i<data.length;this.i++)
            {
              // console.log(i);
              // console.log(data[i].date);
              this.alldate.push(data[this.i].date);
              // console.log(this.alldate);
            }
            console.log(this.alldate);

        }
      )
    }


    // myFilter = (d: Date | null): boolean => {

    //   this.j=0;
    //   d=new Date(this.alldate[this.j]);
    //       if(!d)
    //         return true;
    //       else 
    //         return false;

    //   for(this.j=0;this.j<this.alldate.length;this.j++){
    //     d=new Date(this.alldate[this.j]);
    //     if(!d)
    //       return true;
    //     else 
    //       return false;
    //   }
    // }



    updateItem(){

      if(this.date===""){
        this._incomeservice.updateincomedetails(new income(this.incomeId,this.amount,this.name,this.currentdate,this.contactNo,this.reason)).subscribe(
          (data:any)=>{
            console.log(data)
          }
        );
        alert("Income updated successfully!");
        this._route.navigate(['/dashboard/income']);
      }
      else{
      var temp = new Date(new Date(this.date).setDate(new Date(this.date).getDate() + 1));
      console.log(temp);
      var dateadjusted= temp.toISOString();
      console.log(dateadjusted);
      var isodate=dateadjusted.substring(0,10);
      console.log(isodate);
      var day= dateadjusted.substring(8,10);
      var month=dateadjusted.substring(5,7);
      var year=dateadjusted.substring(4,0);
      var finaldate= day+"/"+month+"/"+year;
      console.log(finaldate);

      for(this.j=0;this.j<this.alldate.length;this.j++){
            if(this.alldate[this.j]==finaldate){
              this.flag=1
            }
      }

      if(this.flag==0){
        
        this._incomeservice.updateincomedetails(new income(this.incomeId,this.amount,this.name,finaldate,this.contactNo,this.reason)).subscribe(
          (data:any)=>{
            console.log(data)
          }
        );
        alert("Income updated successfully!");
        this._route.navigate(['/dashboard/income']);
      }
      else{
        //alert("Date Already Booked: Please select some other date");
        this.datebooked="Date Already Booked: Please select some other date";
        this.flag=0;
        
      }
      }
    }

    goBack() {
      this._route.navigate(["/dashboard/income"]);
    }
  
}
 