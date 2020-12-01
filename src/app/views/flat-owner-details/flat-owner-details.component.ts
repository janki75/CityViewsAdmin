import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../../services/ownerservice.service';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { owner_class } from '../../services/classes/owner';

@Component({
  selector: 'app-flat-owner-details',
  templateUrl: './flat-owner-details.component.html',
  styleUrls: ['./flat-owner-details.component.css']
})
export class FlatOwnerDetailsComponent implements OnInit {
ownerId:number;
name:string;
contactNo:string;
email:string;
dateOfPurchase:Date;
  constructor(private ownerser:OwnerserviceService,private actroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.actroute.params.subscribe(
      (x:Params)=>{
        this.ownerId=x['id'];
        this.ownerser.getownerbyid(this.ownerId).subscribe(
          (data:any)=>{
           console.log(data);
          this.name=data.name;
          this.contactNo=data.contactNo;
          this.email=data.email;
          this.dateOfPurchase=data.dateOfPurchase;
          }
        );
      }
    );
  }
  onback()
  {
    this._route.navigate(['dashboard/flats']);
  }

}
