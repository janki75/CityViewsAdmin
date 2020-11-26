import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../../services/owner.service';


@Component({
  selector: 'app-addowner',
  templateUrl: './addowner.component.html',
  styleUrls: ['./addowner.component.css']
})
export class AddownerComponent implements OnInit {
ownerList:any[] = [];
err:any;
ownerName:any;
ownerContactNo:any;
ownerEmail:any;
ownerDate:any;
i:number;
cnt:number=0;
  constructor(private owner : OwnerService,private router : Router) { }

  ngOnInit() {
    
  }

  goBack() {
    this.router.navigate(["/dashboard/owner"]);
  }

  addDetails(data){

      this.owner.getAllOwner()
      .subscribe((res:any) => {
        this.ownerList = res;

       for(this.i=0;this.i<this.ownerList.length;this.i++){
         if(this.ownerList[this.i].email == this.ownerEmail){
           this.cnt++;
         }
       }

          if(this.cnt == 0){
            let date = new Date();
            let ownerDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
            const data1 = {
              name:this.ownerName,
              contactNo:this.ownerContactNo,
              dateOfPurchase:ownerDate,
              email:this.ownerEmail,
              active:true,
              password:"123456"
            }

            this.owner.addOwnerDetail(data1)
            .subscribe((res) => {
              
            })
            this.err = "Owner details are added successfully!!";



          }
          else{
            this.err= "Entered email is already registered!!!";
          }
      })
    
    
  }

}
