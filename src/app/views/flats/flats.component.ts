import { Component, OnInit } from '@angular/core';
import { FlatsService } from '../../services/flats.service';
import { flat_Class } from '../../services/classes/flat';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  flat_arr:flat_Class[]=[];
  occupied:flat_Class[]=[];
  vacant:flat_Class[]=[];


  constructor(private flatser:FlatsService,private _route:Router) { }

  ngOnInit() {

    this.flatser.getallflats().subscribe(
   (data:any)=>{
     console.log(data);
     this.flat_arr=data;

   }
    );

    this.flatser.getoccupiedflats().subscribe(
      (data:any)=>{
        console.log(data);
        this.occupied=data;


      }
    );

    this.flatser.getvacantflats().subscribe(
    (data:any)=>{
        this.vacant=data;
    }
    );
  }

addflats()
{
  this._route.navigate(['dashboard/meeting/addflats']);
}
onview(id)
{
console.log(id);
this._route.navigate(['dashboard/flats/ownerdetail/'+id]);

}
onassign(id)
{
  console.log(id);
  this._route.navigate(['dashboard/flats/assignowner/'+id]);
}
onedit(id)
{
  console.log(id);
  this._route.navigate(['dashboard/meeting/editflat/'+id]);
}
onnotoccupied(id)
{
console.log(id);
this.flatser.updatetonotoccupiedflat(id).subscribe(
  (data:any)=>{
    console.log("done");
  }
);
this._route.routeReuseStrategy.shouldReuseRoute = function () {
  return false;
};
this._route.onSameUrlNavigation = "reload";

location.reload();
}

}
