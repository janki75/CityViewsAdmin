import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { SalaryService } from '../../services/salary.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-viewmonthlysalary',
  templateUrl: './viewmonthlysalary.component.html',
  styleUrls: ['./viewmonthlysalary.component.css']
})
export class ViewmonthlysalaryComponent implements OnInit {

  sub:any;
monthNo:string;
displayedColumns: string[] = [
  "employeeName",
  "amountPaid",
  "noOfLeaves",
  "datePaid",
  "action"
];


foods: any[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];
details:any[] = [];
salDetails:any[] = [];
empDetail:any[] = [];
i:number;
currYear:any;
month:any;
msg:string="No records are there!!";
salId:number;
empName:string;
Leaves:number;
noLeaves:number;
Amt:any;
salDate:any;
empId:number;
err:any;
salary:number;
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private emp:EmployeeService,private sal:SalaryService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sub = this.route.queryParams.subscribe((params) => {
      this.monthNo = params["monthNo"];

      if (this.monthNo) {
 
        this.sal.getSalDetail()
    .subscribe((res:any) =>{
      this.details = res;
      let currDate = new Date();
      this.currYear = currDate.getFullYear();
      for(this.i=0;this.i<this.details.length;this.i++){
        let date1 = this.details[this.i].datePaid;
        let month = date1.substring(3,5);
        if(this.monthNo == '1' || this.monthNo == '2' || this.monthNo == '3'|| this.monthNo == '4'|| this.monthNo == '5'|| this.monthNo == '6'|| this.monthNo == '7'|| this.monthNo == '8'|| this.monthNo == '9'){
         this.monthNo = "0"+this.monthNo;
          
        }
        
        let year = date1.substring(6,10);
        
        if(month == this.monthNo && year == this.currYear){
            const data1 = {id:this.details[this.i].salaryId,amountPaid : this.details[this.i].amountPaid,datePaid : this.details[this.i].datePaid,employeeName : this.details[this.i].employeeName,noOfLeaves:this.details[this.i].noOfLeaves}
            this.salDetails.push(data1);
 
    this.dataSource.data = this.salDetails;          
        }
      }
    })
       }
    });
  }
 
  getSalDetailsById(data){
    console.log(data);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        salaryId: data.id,
        month:this.monthNo
      },
    };
    this.router.navigate(['dashboard/salary/viewmonthlysalary/updatemonthlysalary'],navigationExtras);
    /*this.sal.getSalDetailById(data.id)
    .subscribe((res:any) => {
       this.salId = res.salaryId;
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
    })*/
  } 

  onSearchChange(event: any){
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

  updateSalDetails(data){
    const data1 = {
           amount : data.amt,
           date : data.expdate,
           reason : data.expreason
         }
  }

//  updateExpDetails(data){
//   const data1 = {
//     amount : data.amt,
//     date : data.expdate,
//     reason : data.expreason
//   }
//   console.log(data1);
//    this.exp.editExpense(data1,this.expenseId)
//    .subscribe((res:any) => {
//     this.Amt = res.amount;
//     this.expDate = res.date;
//     this.expReason = res.reason;
//    })
//    this.router.routeReuseStrategy.shouldReuseRoute = function () {
//     return false;
//   };
//   this.router.onSameUrlNavigation = "reload";
//   this.router.navigate(["/dashboard/manageEmployees"]);
//   location.reload();
//    this.err="Expense details are updated successfully!!"
//  }

}
