import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { SalaryService } from '../../services/salary.service';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {
empId:any;
salDate:any;
month:any;
salary:any;
Amt:any;
empName:any;
Leaves:any;
empDetail:any[] = [];
Emp:any;
err:string;
  constructor(private emp : EmployeeService,private sal : SalaryService) { }

  ngOnInit() {
    this.emp.getallemployee()
    .subscribe((res:any) => {
      this.empDetail = res;
    })
  }
  
      onSearchChange(event: any){
        if(this.salDate == null){
          this.err="Please first write the date!!";
        }
        if(this.salDate != null){
          this.emp.getEmployeeById(this.empId)
          .subscribe((res:any) => {
            let date1 = this.salDate;
            this.month = date1.substring(3,5);
            this.salary = res.posSalary;
            
            if(this.month == '01' || this.month == '03' || this.month == '05'|| this.month == '07'|| this.month == '08'|| this.month == '10'|| this.month == '12'){
            let sal = this.salary/31;
            this.Amt = (this.salary - (sal*event)).toFixed(2);
            }
            else if(this.month == '04' || this.month == '06' || this.month == '09'|| this.month == '11'){
              let sal = this.salary/30;
              this.Amt = (this.salary - (sal*event)).toFixed(2);
            }
            
            else if(this.month == '02'){
              let sal = this.salary/28;
              this.Amt = (this.salary - (sal*event)).toFixed(2);
            }
          })
        }
        
    }

    selectChangeHandler(data){
      this.empId = data.value;
    }

    onSearchDate(event){
      this.salDate = event;
    }

    addSalDetails(){
      const data = {
        amountPaid : this.Amt,
        employeeId : this.empId,
        datePaid : this.salDate,
        noOfLeaves : this.Leaves
      }
      this.sal.addSalary(data)
      .subscribe((res) => {
      })
      this.err="Salary details are added successfully!!";      
    }
}
