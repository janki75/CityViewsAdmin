import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
pos:any[] = [];
err:any;
empName:any;
empAddress:any;
empContactNo:any;
Pos:any;

  constructor(private employee : EmployeeService,private router : Router) { }

  ngOnInit() {
    this.employee.getAllEmpPosition()
    .subscribe((res:any) => {
      console.log(res);
        this.pos = res;
    })
  }

  goBack() {
    this.router.navigate(["/dashboard/employee"]);
  }

  addDetails(data){
    const data1 = {
      name:this.empName,
      contact:this.empContactNo,
      address:this.empAddress,
      employeePositionId:this.Pos,
      active:true
  }

    this.employee.addEmpDetails(data1)
    .subscribe((res) => {
        
    })
    this.err = "Employee details are added successfully!!";
  }
}
