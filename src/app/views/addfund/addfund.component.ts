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
  constructor(private fund : FundsService,private router : Router) { }

  ngOnInit() {
    this.fund.getallowners()
    .subscribe((res:any) => {
      this.owner = res;
    })    
  }

  addDetails(data){
    this.fund.getIdByOwnerName(data.owner)
    .subscribe((res:number) => {
      this.ownerId = res;
      const data1 = {
        amount:this.Amt,
        date:this.fundDate,
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
