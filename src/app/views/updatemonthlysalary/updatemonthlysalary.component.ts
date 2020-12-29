import { Component, OnInit } from '@angular/core';
import { NavigationExtras,ActivatedRoute,Router } from '@angular/router';
import { SalaryService } from '../../services/salary.service';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-updatemonthlysalary',
  templateUrl: './updatemonthlysalary.component.html',
  styleUrls: ['./updatemonthlysalary.component.css']
})
export class UpdatemonthlysalaryComponent implements OnInit {
sub:any;
salId:any;
Amt:any;
salDate:any;
empName:any;
Leaves:any;
empId:any;
empDetail : any[] = [];
month:any;
salary:any;
Emp:any;
err:string;
monthNo:number;
fulldate:any;
sta:boolean=false;
  constructor(private router : Router,private route : ActivatedRoute,private sal : SalaryService,private emp : EmployeeService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.salId = params["salaryId"];
      this.monthNo = params["month"];
      if (this.salId) {
        this.sal.getSalDetailById(this.salId)
    .subscribe((res:any) => {
       this.Amt = res.amountPaid;
       this.salDate = res.datePaid;
       this.empName = res.employeeName;
       this.Leaves = res.noOfLeaves;
       this.empId = res.employeeId;
    })
    this.emp.getallemployee()
    .subscribe((res:any) => {
      this.empDetail = res;
      console.log(this.empDetail);
    })
      }
    });
  }
  onSearchChange(event: any){
    this.emp.getEmployeeById(this.empId)
    .subscribe((res:any) => {
      let date1 = this.salDate;
      if(this.sta == false){
        this.month = date1.substring(3,5);
      }
      if(this.sta == true){
        this.month = date1.substring(5,7);
      }
      
      this.salary = res.posSalary;
      console.log(this.month);
      
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

      updateSalDetails(data){
        if(this.Emp != undefined){
          let day = this.salDate.substring(0,2);
          let month = this.salDate.substring(3,5);
          let year = this.salDate.substring(6,10);
          
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
      this.fulldate = "0" + day + "/" + month + "/" +year;
      
    }
    else
    {
      this.fulldate = day + "/" + month + "/" +year;
      
    }
          const data1 = {
            amountPaid : this.Amt,
            noOfLeaves : this.Leaves,
            employeeId : this.Emp,
            datePaid : this.fulldate
          }

          this.sal.editSalary(data1,this.salId)
          .subscribe((res) => {

          })
          this.err = "Salary details are updated successfully!!";
        }  
        
        if(this.Emp == undefined){
          
          let day = this.salDate.substring(0,2);
          let month = this.salDate.substring(3,5);
          let year = this.salDate.substring(6,10);
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
      this.fulldate = "0" + day + "/" + month + "/" +year;
      
    }
    else
    {
      this.fulldate = day + "/" + month + "/" +year;
      
    }
          const data1 = {
            amountPaid : this.Amt,
            noOfLeaves : this.Leaves,
            employeeId : this.empId,
            datePaid : this.fulldate
          }

          this.sal.editSalary(data1,this.salId)
          .subscribe((res) => {

          })
          this.err = "Salary details are updated successfully!!";
        }  
      }

      goBack() {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            monthNo:this.monthNo
          },
        };
        this.router.navigate(["/dashboard/salary/viewmonthlysalary"],navigationExtras);
      }

      onSearchDate(event){
        this.salDate = event;
        this.sta = true;
        console.log(this.salDate);
      }
}
