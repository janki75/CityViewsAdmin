import { Component, OnInit } from '@angular/core';
import { FlatsService } from '../../services/flats.service';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { flat_Class } from '../../services/classes/flat';

@Component({
  selector: 'app-editflat',
  templateUrl: './editflat.component.html',
  styleUrls: ['./editflat.component.css']
})
export class EditflatComponent implements OnInit {
flatId:number;
flatNo:string;
bhk:number;
parkingSlot:string;
ownerId:number;
occupied:boolean;
  constructor(private _flatser:FlatsService,private _actroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {

    this._actroute.params.subscribe(
      (x:Params)=>{
        this.flatId=x['id'];
        this._flatser.getflatbyid(this.flatId).subscribe(
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
  onsave()
  {
    this._flatser.editflats(new flat_Class(this.flatId,this.flatNo,this.bhk,this.parkingSlot,this.occupied,this.ownerId)).subscribe(
      (data:any)=>{
        console.log("updated");


      }

    );
    alert("Flat updated");
    this._route.navigate(['/dashboard/flats']);


  }
  cancel()
  {
    this._route.navigate(['/dashboard/flats']);
  }

}
