import { Component, OnInit } from '@angular/core';
import { ManagemployeepositionService } from 'src/app/services/managemployeeposition.service';
import { employeePosition } from 'src/app/services/classes/employeePosition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployeeposition',
  templateUrl: './addemployeeposition.component.html',
  styleUrls: ['./addemployeeposition.component.css']
})
export class AddemployeepositionComponent implements OnInit {
   employeePositionId:number;
         positionName:string;
         salary:number;
         responsibilities:string;
         msg:string;
         pattern = "/^[A-Za-z]+$/";
  constructor(private _route:Router,private _empposserv:ManagemployeepositionService) { }

  ngOnInit() {
  }
  addItem()
  {
    this._empposserv.addEmployeePosition(new employeePosition(this.employeePositionId,this.positionName,this.salary,this.responsibilities)).subscribe(
      (data:employeePosition[])=>{

      }
    );
    this.msg = "Position is successfully added!!"
  }
  cancel()
  {
    this._route.navigate(['/dashboard/employeeposition']);
  }


}
