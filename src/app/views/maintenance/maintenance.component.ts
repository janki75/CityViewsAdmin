import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { maintenance } from 'src/app/services/classes/maintenance';
import { MatPaginator, MatSort } from "@angular/material";
import { Router } from '@angular/router';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  displayedColumns: string[] = ['flat_id','date','month','action'];
  dataSource = new MatTableDataSource();
  msg:string="";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _route:Router,private _mainserv:MaintenanceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._mainserv.getAllMaintenance().subscribe(
      (data:maintenance[])=>{
        console.log(data);
        if(data.length>0)
        this.dataSource.data=data;
        else
        this.msg="No records found!!";

      }
    );
  }
  onadd()
  {
    this._route.navigate(['/dashboard/addmaintenance']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onupdate(element)
  {
    console.log(element);
    this._route.navigate(['/dashboard/editmaintenance',element.id ]);
  }
  onshowdue()
  {
    this._route.navigate(['/dashboard/duemaintenance']);
  }
}


