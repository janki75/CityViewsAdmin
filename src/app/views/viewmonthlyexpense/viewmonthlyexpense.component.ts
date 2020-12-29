import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";


@Component({
  selector: 'app-viewmonthlyexpense',
  templateUrl: './viewmonthlyexpense.component.html',
  styleUrls: ['./viewmonthlyexpense.component.css']
})
export class ViewmonthlyexpenseComponent implements OnInit {
sub:any;
monthNo:string;
displayedColumns: string[] = [
  "amount",
  "date",
  "reason",
  "action"
];
details:any[] = [];
expDetails:any[] = [];
i:number;
currYear:any;
month:number;
msg:string="No records are there!!";
Amt:any;
expDate:any;
expReason:any;
expenseId:any;
err:any;
fullDate:any;
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private exp:ExpenseService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sub = this.route.queryParams.subscribe((params) => {
      this.monthNo = params["monthNo"];

      if (this.monthNo) {
 
        this.exp.getExpDetail()
    .subscribe((res:any) =>{
      this.details = res;
      let currDate = new Date();
      this.currYear = currDate.getFullYear();
      for(this.i=0;this.i<this.details.length;this.i++){
        let date1 = this.details[this.i].date;
        let month = date1.substring(3,5);
        if(this.monthNo == '1' || this.monthNo == '2' || this.monthNo == '3'|| this.monthNo == '4'|| this.monthNo == '5'|| this.monthNo == '6'|| this.monthNo == '7'|| this.monthNo == '8'|| this.monthNo == '9'){
         this.monthNo = "0"+this.monthNo;
          
        }
        
        let year = date1.substring(6,10);
        
        if(month == this.monthNo && year == this.currYear){
            const data1 = {id:this.details[this.i].expenseId,amt : this.details[this.i].amount,date : this.details[this.i].date,reason : this.details[this.i].reason}
            this.expDetails.push(data1);
 
    this.dataSource.data = this.expDetails;          
        }
      }
    })
       }
    });
    
  }
 
 getExpDetailsById(data){ 
   this.exp.getById(data.id)
   .subscribe((res:any) => {
      this.expenseId = res.expenseId;
      this.Amt = res.amount;
      this.expDate = res.date;
      this.expReason = res.reason;
   })
 } 

 updateExpDetails(data){
  let date = new Date(this.expDate);
  console.log(this.expDate);
  let day = this.expDate.substring(0,2);
  let month = this.expDate.substring(3,5);
  let year = this.expDate.substring(6,10);
  if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9){
    this.fullDate = "0" + day + "/" + month + "/" +year;
    
  }
  else
  {
    this.fullDate = day + "/" + month + "/" +year;
    
  }
  console.log(this.fullDate);
  const data1 = {
    amount : data.amt,
    date : this.fullDate,
    reason : data.expreason
  }
  console.log(data1);
   this.exp.editExpense(data1,this.expenseId)
   .subscribe((res:any) => {
   })
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
     return false;
   };
   this.router.onSameUrlNavigation = "reload";
   this.router.navigate(["/dashboard/manageEmployees"]);
   location.reload();
   this.err="Expense details are updated successfully!!"
 }
}
