import { Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { ManagemployeepositionService } from 'src/app/services/managemployeeposition.service';
import { employeePosition } from 'src/app/services/classes/employeePosition';
@Component({
  selector: 'app-manageemployeeposition',
  templateUrl: './manageemployeeposition.component.html',
  styleUrls: ['./manageemployeeposition.component.css']
})
export class ManageemployeepositionComponent implements OnInit {
  displayedColumns: string[] = ['positionName','salary','responsibilities','action'];
  dataSource = new MatTableDataSource();
 
  constructor(private _route:Router,private _posserv:ManagemployeepositionService) { }
msg:string="";
  ngOnInit() {
   
    this._posserv.getAllEmployeePosition().subscribe(
      (data:employeePosition[])=>{
        console.log(data);
        if(data.length>0)
        this.dataSource.data=data;
        else
        this.msg="No records found!!";


      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onupdate(element)
  {
    console.log(element.employeePositionId);
    this._route.navigate(['/dashboard/employeeposition/editemployeeposition',element.employeePositionId]);
  }
  onadd()
  {
    this._route.navigate(['/dashboard/employeeposition/addemployeepositionComponent']);
  }
}
