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
  ownerList:any[] = [];
  Owner:any;
  ownerId:number;
  fundOwnerId:number;
  ownerEmailId:number;
err:string;
i:number;
fulldate:any;
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
      this.ownerList = res;
      for(this.i = 1;this.i<this.ownerList.length;this.i++){
        const data = {name: this.ownerList[this.i].name,email : this.ownerList[this.i].email};
          this.owner.push(data);    
      }
    })
  }

  editDetails(data){
    this.fund.getIdByOwnerName(this.ownerEmail)
    .subscribe((res:any) => {
        this.ownerId = res.id;
        
        if(this.Owner == null){
          this.fundOwnerId = this.ownerId;
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
    
          const data1 = {
            amount:this.Amt,
            date:this.fulldate,
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
        .subscribe((res:any) => {
          this.fundOwnerId = res.id;
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
          const data1 = {
            amount:this.Amt,
            date:this.fulldate,
            reason:this.fundReason,
            paymentMode:"offline",
            ownerId:this.fundOwnerId
        }
        console.log(data1);
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
