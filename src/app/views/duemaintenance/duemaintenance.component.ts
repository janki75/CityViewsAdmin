import { maintenance } from 'src/app/services/classes/maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { Router } from '@angular/router';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from "@angular/material";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-duemaintenance',
  templateUrl: './duemaintenance.component.html',
  styleUrls: ['./duemaintenance.component.css']
})
export class DuemaintenanceComponent implements OnInit {
  displayedColumns: string[] = ['flat_No','OwnerName','OwnerEmail','OwnerPhoneNo',
];
msg:string="";
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  currmonth:string='';
  curryear:string='';
  constructor(private _route:Router,private _mainserv:MaintenanceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._mainserv.getAllDueMaintenance().subscribe(
      (data:maintenance[])=>{
        if(data.length>0)
        this.dataSource.data=data;
        else
        this.msg="No records found!!";
      }
    );
    let d=new Date();
    let m=d.getMonth()+1;
    if(m==1)
    {
      this.currmonth="January";
    }
    else if(m==2)
    {
      this.currmonth="February";
    }
    else if(m==3)
    {
      this.currmonth="March";
    }
    else if(m==4)
    {
      this.currmonth="April";
    }
    else if(m==5)
    {
      this.currmonth="May";
    }
    else if(m==6)
    {
      this.currmonth="June";
    }
    else if(m==7)
    {
      this.currmonth="July";
    }
    else if(m==8)
    {
      this.currmonth="August";
    }
    else if(m==9)
    {
      this.currmonth="Septemer";
    }
    else if(m==10)
    {
      this.currmonth="October";
    }
    else if(m==11)
    {
      this.currmonth="November";
    } 
    else if(m==12)
    {
      this.currmonth="December";
    } 
    this.curryear=d.getFullYear()+"";

    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 

}
