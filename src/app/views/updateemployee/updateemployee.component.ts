import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { of } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
sub:any;
empId:number;
empName:any;
empContactNo:any;
empAddress:any;
empPos:any;
Pos:any;
pos:any[] =[];
err:string;
posId:number;
empposId:number;
  constructor(private employee:EmployeeService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.empId = params["empId"];

      if (this.empId) {
        this.employee.getEmployeeById(this.empId)
        .subscribe((res:any) => {
           this.empName = res.name;
           this.empAddress =  res.address;
           this.empPos = res.position;
           this.empContactNo = res.contact;
        })
      }
    });

    this.employee.getAllEmpPosition()
    .subscribe((res:any) => {
        this.pos = res;
    })
  }

  editDetails(data){
    this.employee.getPositionIdByName(this.empPos)
    .subscribe((res:number) => {
        this.posId = res;
        if(this.Pos == null){
          this.empposId = this.posId;
      }
      else{
        this.empposId = this.Pos;
      }

      const data1 = {
        employeeId:this.empId,
        name:this.empName,
        contact:this.empContactNo,
        address:this.empAddress,
        employeePositionId:this.empposId,
    }

    console.log(data1);
    
    this.employee.updateEmpDetails(data1)
    .subscribe((res) => {

    })
    
    this.err = "Details are updated successfully!!";
    });
    

    
  }

  goBack() {
    this.router.navigate(["/dashboard/employee"]);
  }

}
