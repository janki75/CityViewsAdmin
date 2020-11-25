import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  getDetails(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        monthNo: data
      },
    };
    this.route.navigate(['dashboard/salary/viewmonthlysalary'],navigationExtras);
  }

  addEmpSal(){
    this.route.navigate(['dashboard/salary/addsalary']);
  }
}
