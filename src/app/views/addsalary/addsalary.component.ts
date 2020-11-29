import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { SalaryService } from '../../services/salary.service';
import { Router } from '@angular/router';

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
fulldate:any;
  constructor(private emp : EmployeeService,private sal : SalaryService,private router : Router) { }

  ngOnInit() {
    this.emp.getallemployee()
    .subscribe((res:any) => {
      this.empDetail = res;
    })
  }
  
      onSearchChange(event: any){
        if(this.salDate == null && this.Emp == undefined){
          this.err="Please first write date and select any one employee!!";
        }
        if(this.salDate != null && this.Emp != undefined){
          this.emp.getEmployeeById(this.empId)
          .subscribe((res:any) => {
            let date1 = this.salDate;
            this.month = date1.substring(5,7);
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
      let date = new Date(this.salDate);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
      this.fulldate = "0" + day + "/" + month + "/" +year;
      
    }
    else
    {
      this.fulldate = day + "/" + month + "/" +year;
      
    }
      const data = {
        amountPaid : this.Amt,
        employeeId : this.empId,
        datePaid : this.fulldate,
        noOfLeaves : this.Leaves
      }
      this.sal.addSalary(data)
      .subscribe((res) => {
      })
      this.err="Salary details are added successfully!!";      
    }

    goBack() {
      
      this.router.navigate(["/dashboard/salary"]);
    }
}
