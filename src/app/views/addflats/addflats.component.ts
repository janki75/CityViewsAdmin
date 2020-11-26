import { Component, OnInit } from '@angular/core';
import { FlatsService } from '../../services/flats.service';
import { Router } from '@angular/router';
import { flat_Class } from '../../services/classes/flat';

@Component({
  selector: 'app-addflats',
  templateUrl: './addflats.component.html',
  styleUrls: ['./addflats.component.css']
})
export class AddflatsComponent implements OnInit {
flatId:number;
flatNo:string;
occupied:boolean;
bhk:number;
parkingSlot:string;
ownerId:number;
msg:string;

  constructor(private flatser:FlatsService,private _route:Router) { }

  ngOnInit() {
  }
  addflat()
  {
    this.flatser.addflats(new flat_Class(this.flatId,this.flatNo,this.bhk,this.parkingSlot,false,0)).subscribe(
      (data:flat_Class[])=>{
         console.log(data);
      }

    );
    alert("Flat added succesfully!");
    this._route.navigate(['dashboard/flats']);

  }
  cancel()
  {
    this._route.navigate(['/dashboard/flats']);
  }

}
