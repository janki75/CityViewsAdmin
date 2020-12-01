import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { IfStmt } from '@angular/compiler';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = [
    "name",
    "contact",
    "address",
    "position",
    "active", 
    "action",
  ];
  dataSource = new MatTableDataSource();
  emplist: any = [];
  mobile:number;
  err:string="";
  msg:string="No records are there!!";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _employee : EmployeeService,private route:Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._employee.getallemployee()
    .subscribe((res) => {
      this.emplist = res;
      
    if(this.emplist.length > 0){
      this.dataSource.data = this.emplist;
    }
    

    },
    (error) => {
      console.log(error);
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateStatus(data){
    if(data.active == true){
      this._employee.updateStatusToInactive(data)
      .subscribe((res) => {

        console.log(res);
      })
      this.route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.route.onSameUrlNavigation = "reload";
      this.route.navigate(["/dashboard/manageEmployees"]);
      location.reload();
    }
    else if(data.active == false){
      this._employee.updateStatusToActive(data)
      .subscribe((res) => {

        console.log(res);
      })
      this.route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.route.onSameUrlNavigation = "reload";
      this.route.navigate(["/dashboard/manageEmployees"]);
      location.reload();
    }
  }

  updateEmpDetails(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        empId: data.employeeId,
      },
    };
    this.route.navigate(['dashboard/employee/updateemployee'],navigationExtras);
  }

  addEmp(){
    this.route.navigate(['dashboard/employee/addemployee']);
  }

}
