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
        this.occupied=data;
      }
    );
  }

addflats()
{
  this._route.navigate(['dashboard/meeting/addflats']);
}
onview()
{

}

}
