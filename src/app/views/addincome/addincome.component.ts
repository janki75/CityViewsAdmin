import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { Router } from '@angular/router';
import { income } from '../../services/classes/income';

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

name:any;
date:any;
contactNo:any;
amount:any;
reason:any;
incomeId:any;
alldate:string[]=[];
i:number;
j:number;
datebooked:string="";
flag:number=0;
mindate:Date;

  constructor(private _incomeservice : IncomeService,private _route : Router) {
    this.mindate=new Date();
   }

  ngOnInit() {
    this._incomeservice.getallincome().subscribe(
      (data:income[])=>{
          this.i=0;
          console.log(data);
          for(this.i=0;this.i<data.length;this.i++)
          {
            this.alldate.push(data[this.i].date);
            // console.log(this.alldate);
          }
          console.log(this.alldate);

      }
    )
  }

  goBack() {
    this._route.navigate(["/dashboard/income"]);
  }

  addincome(){
    var temp = new Date(new Date(this.date).setDate(new Date(this.date).getDate() + 1));
      var dateadjusted= temp.toISOString();
      var isodate=dateadjusted.substring(0,10);
      console.log(isodate);
      var day= dateadjusted.substring(8,10);
      var month=dateadjusted.substring(5,7);
      var year=dateadjusted.substring(4,0);
      var finaldate= day+"/"+month+"/"+year;
      console.log(finaldate);

    const data = {
      amount:this.amount,
      name:this.name,
      date:finaldate,
      contactNo:this.contactNo,
      reason:this.reason,
  }

  for(this.j=0;this.j<this.alldate.length;this.j++){
    if(this.alldate[this.j]==finaldate){
      this.flag=1
    }
}

if(this.flag==0){
  this.datebooked="";
    this._incomeservice.addincomedetails(data).subscribe((data:any) => {
        console.log(data);
    })
    alert("Income updated successfully!");
    this._route.navigate(['/dashboard/income']);
  }
  else{
    this.datebooked="Date Already Booked: Please select some other date";
    this.flag=0;
  }
}

}
