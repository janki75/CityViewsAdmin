import { ManagemployeepositionService } from 'src/app/services/managemployeeposition.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { employeePosition } from 'src/app/services/classes/employeePosition';

@Component({
  selector: 'app-editemployeeposition',
  templateUrl: './editemployeeposition.component.html',
  styleUrls: ['./editemployeeposition.component.css']
})
export class EditemployeepositionComponent implements OnInit {
  employeePositionId:number;
  positionName:string;
 salary:number;
 responsibilities:string;
 msg:string;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _empposserv:ManagemployeepositionService) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.employeePositionId=x['id'];
        this._empposserv.getPositionById(this.employeePositionId).subscribe(
          (data:employeePosition)=>{
            this.positionName=data.positionName;
            this.salary=data.salary;
            this.responsibilities=data.responsibilities;
          }
        );
       
      }
    );
  

  }
  onupdate()
  {
    this._empposserv.updateEmployeePosition(new employeePosition(this.employeePositionId,this.positionName,this.salary,this.responsibilities)).subscribe(
      (data:employeePosition)=>{

      }
    );
    this.msg = "EMployee Position Details are successfully changed!!"
  }

  cancel()
  {
    this._route.navigate(['/dashboard/employeeposition']);
  }
}
