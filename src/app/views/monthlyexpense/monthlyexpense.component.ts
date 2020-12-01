import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-monthlyexpense',
  templateUrl: './monthlyexpense.component.html',
  styleUrls: ['./monthlyexpense.component.css']
})
export class MonthlyexpenseComponent implements OnInit {
details:any[] = [];
expDetails:any = [];
i:number;
  constructor(private exp : ExpenseService,private route : Router) { }

  ngOnInit() {
  }

  getDetails(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        monthNo: data
      },
    };
    this.route.navigate(['dashboard/expenses/monthlyexpenses/viewmonthlyexpenses'],navigationExtras);
  }
}
