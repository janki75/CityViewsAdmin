import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../../services/ownerservice.service';
import { owner_class } from '../../services/classes/owner';
import { FlatsService } from '../../services/flats.service';
import { Router, ActivatedRoute ,Params} from '@angular/router';
import { flat_Class } from '../../services/classes/flat';

@Component({
  selector: 'app-assignownertoflat',
  templateUrl: './assignownertoflat.component.html',
  styleUrls: ['./assignownertoflat.component.css']
})
export class AssignownertoflatComponent implements OnInit {

  constructor(private ownerser:OwnerserviceService,private flatser:FlatsService,private _route:Router,private _actroute:ActivatedRoute) { }
ownerarr:owner_class[]=[];
i:number;
flatId:number;
flatNo:string;
bhk:number;
parkingSlot:string;
occupied:boolean;
ownerId:number;
  ngOnInit() {

    this.ownerser.getallowner().subscribe(
      (data:any)=>{
        console.log(data);
        for(this.i=0;this.i<data.length;this.i++)
        {
          if(data[this.i].active==true && data[this.i].name!="admin")
          {
            this.ownerarr.push(data[this.i]);
            console.log(this.ownerarr);
          }
        }

      }
    );

    this._actroute.params.subscribe(
      (x:Params)=>{
        this.flatId=x['id'];
        this.flatser.getflatbyid(this.flatId).subscribe(
          (data:any)=>{
            this.flatId=data.flatId;
            this.flatNo=data.flatNo;
            this.bhk=data.bhk;
            this.parkingSlot=data.parkingSlot;
            this.occupied=data.occupied;
            this.ownerId=data.ownerId;
          }
        );
      }
    );
  }

  onadd(id)
  {
    console.log(id);
    this.flatser.editflats(new flat_Class(this.flatId,this.flatNo,this.bhk,this.parkingSlot,true,id)).subscribe(
      (data:any)=>{

      }
    );
    alert("owner assigned succesfully!");
    this._route.navigate(["dashboard/flats"]);






  }
}
