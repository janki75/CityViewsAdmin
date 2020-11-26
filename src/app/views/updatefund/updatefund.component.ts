import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FundsService } from '../../services/funds.service';

@Component({
  selector: 'app-updatefund',
  templateUrl: './updatefund.component.html',
  styleUrls: ['./updatefund.component.css']
})
export class UpdatefundComponent implements OnInit {
  sub:any;
  fundId:number;
  Amt:number;
  fundDate:any;
  fundReason:any;
  ownerEmail:any;
  owner:any[] = [];
  Owner:any;
  ownerId:number;
  fundOwnerId:number;
  ownerEmailId:number;
err:string;
  constructor(private fund:FundsService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.fundId = params["fundId"];

      if (this.fundId) {
        this.fund.getFundDetailById(this.fundId)
        .subscribe((res:any) => {
          this.fundId=res.id;
           this.Amt = res.amount;
           this.fundDate =  res.date;
           this.fundReason = res.reason;
           this.ownerEmail = res.ownerEmail;
        })
      }
    });

    this.fund.getallowners()
    .subscribe((res:any) => {
      this.owner = res;

    })
  }

  editDetails(data){
    this.fund.getIdByOwnerName(this.ownerEmail)
    .subscribe((res:any) => {
        this.ownerId = res.id;
        
        if(this.Owner == null){
          this.fundOwnerId = this.ownerId;
          const data1 = {
            amount:this.Amt,
            date:this.fundDate,
            reason:this.fundReason,
            paymentMode:"offline",
            ownerId:this.fundOwnerId
        }
        this.fund.editFundDetail(data1,this.fundId)
        .subscribe((res)=>{
   
        })
       
        this.err = "Details are updated successfully!!";
      }

      else{
        this.fund.getIdByOwnerName(this.Owner)
        .subscribe((res:number) => {
          this.fundOwnerId = res;
          const data1 = {
            amount:this.Amt,
            date:this.fundDate,
            reason:this.fundReason,
            paymentMode:"offline",
            ownerId:this.fundOwnerId
        }
        this.fund.editFundDetail(data1,this.fundId)
        .subscribe((res)=>{
   
        })
       
        this.err = "Details are updated successfully!!";
        })       
      }
    });
    
  }
  goBack() {
    this.router.navigate(["/dashboard/funds"]);
  }

}
