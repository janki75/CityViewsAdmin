import { FlatsComponent } from './../flats/flats.component';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { Component, OnInit } from '@angular/core';
import { FlatsService } from 'src/app/services/flats.service';
import { flat_Class } from 'src/app/services/classes/flat';
import { maintenance } from 'src/app/services/classes/maintenance';
import { complaint_Class } from 'src/app/services/classes/complaint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmaintenance',
  templateUrl: './addmaintenance.component.html',
  styleUrls: ['./addmaintenance.component.css']
})
export class AddmaintenanceComponent implements OnInit {
   maintenance_id:number;
         amount:number;
         date:string;
         msg:string;
         month:number;
         payment_mode:string;
         flat_no:string;
        arrflat:flat_Class []=[];
        arrmonths:number[]=[
          1,2,3,4,5,6,7,8,9,10,11,12
        ];
  constructor(private _route:Router,private _mainserv:MaintenanceService,private _flatserv:FlatsService) { }

  ngOnInit() {
    this._flatserv.getallflats().subscribe(
      (data:flat_Class[])=>{
        this.arrflat=data;
       
      }
    );
  }
  addItem()
  {
    let d=new Date();
    this.date=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    const data={
      amount:this.amount,
      date:this.date,
      month:this.month,
      paymentMode:"offline",
      flatNo:this.flat_no

    }
    // new maintenance(this.maintenance_id,this.amount,this.date,this.month,"cash",this.flat_no)
    this._mainserv.addMaintenance(data).subscribe(
      (data:complaint_Class)=>{
       
      }
    );
    this.msg="Maintenance successfully added!!";
  }
  cancel()
  {
    this._route.navigate(['/dashboard/maintenance']);
  }

}
