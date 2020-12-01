import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  addExp(){
    this.router.navigate(['dashboard/expenses/addexpense']);
  }
}
