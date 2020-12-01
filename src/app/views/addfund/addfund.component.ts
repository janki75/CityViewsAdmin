import { Component, OnInit } from '@angular/core';
import { FundsService } from '../../services/funds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent implements OnInit {
  mode:any[] = [
    {
      name:"online"
    },
    {
      name:"offline"
    }
];
Owner:any;
owner : any[] = [];
ownerId:number;
Amt:number;
fundDate:any;
fundReason:any;
err:any;
ownerList:any[] = [];
i:number;
fulldate:any;
  constructor(private fund : FundsService,private router : Router) { }

  ngOnInit() {
    this.fund.getallowners()
    .subscribe((res:any) => {
      this.ownerList = res;
      for(this.i = 1;this.i<this.ownerList.length;this.i++){
        const data = {name: this.ownerList[this.i].name,email : this.ownerList[this.i].email};
          this.owner.push(data);    
      }
      console.log(this.owner);
    })    
  }

  addDetails(data){
    let date = new Date(this.fundDate);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
      this.fulldate = "0" + day + "/" + month + "/" +year;
      
    }
    else
    {
      this.fulldate = day + "/" + month + "/" +year;
      
    }
     
    this.fund.getIdByOwnerName(data.owner)
    .subscribe((res:any) => {
      this.ownerId = res.id;
      const data1 = {
        amount:this.Amt,
        date:this.fulldate,
        reason:this.fundReason,
        paymentMode:"offline",
        ownerId:this.ownerId
      }
      this.fund.addFundDetail(data1)
      .subscribe((res) => {
        
      })
      this.err="Fund details are added successfully!!";
    })
  }

  goBack() {
    this.router.navigate(["/dashboard/funds"]);
  }
}
