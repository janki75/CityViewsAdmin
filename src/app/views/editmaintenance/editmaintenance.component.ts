import { flat_Class } from './../../services/classes/flat';
import { FlatsService } from 'src/app/services/flats.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { maintenance } from 'src/app/services/classes/maintenance';

@Component({
  selector: 'app-editmaintenance',
  templateUrl: './editmaintenance.component.html',
  styleUrls: ['./editmaintenance.component.css']
})
export class EditmaintenanceComponent implements OnInit {

  constructor(private _route:Router,private _flatserv:FlatsService,private _acroute:ActivatedRoute,private _mainserv:MaintenanceService) { }
  maintenance_id:number;
  amount:number;
  date:string;
  msg:string;
  month:number;
  payment_mode:string;
  flat_no:string;
  arrmonths:number[]=[
    1,2,3,4,5,6,7,8,9,10,11,12
  ];
  arrpayment_mode:string[]=['offline','online']
  arrflat:flat_Class []=[];
  ngOnInit() {
    this._flatserv.getallflats().subscribe(
      (data:flat_Class[])=>{
        this.arrflat=data;
       
      }
    );
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.maintenance_id=x['id'];
        this._mainserv.getMaintenanceById(this.maintenance_id).subscribe(
          (data:maintenance)=>{
            console.log(data);
            this.amount=data.amount;
            this.date=data.date;
            this.payment_mode=data.paymentMode;
            this.flat_no=data.flatNo;
            this.month=data.month;
          }
        );
      }
    );
  }
  editItem()
  {
    this._mainserv.updateMaintainance(new maintenance(this.maintenance_id,this.amount,this.date,this.month,this.payment_mode,this.flat_no)).subscribe(
    (data:maintenance)=>{

    }
    );
    this.msg="Details successfully updated!!"
  }

  cancel()
  {
    this._route.navigate(['/dashboard/maintenance']);
  }

}
