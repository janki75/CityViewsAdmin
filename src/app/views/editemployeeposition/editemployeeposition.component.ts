import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  constructor(private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.employeePositionId=x['id'];
       
      }
    );
  

  }

}
