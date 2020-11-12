import { A11yModule } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from "../../services/expense.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
Amt:any;
expDate:any;
expReason:any;
err:any;
  constructor(private expense : ExpenseService,private router : Router) { }

  ngOnInit() {
  }

  addExpDetails(data){
    const data1 = {
      amount : data.amt,
      date : data.expdate,
      reason : data.expreason
    }
      this.expense.addExpDetails(data1)
      .subscribe((res) => {
          
      })
      this.err="Expense details are added successfully!!";
  }

  goBack() {
    this.router.navigate(["/dashboard/expenses"]);
  }

}
