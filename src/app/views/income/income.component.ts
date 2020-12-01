import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { IncomeService } from '../../services/income.service';
import { income } from '../../services/classes/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

 
  displayedColumns: string[] = [
    "name",
    "contactNo",
    "date",
    "amount",
    "reason", 
    "action",
  ];
  dataSource = new MatTableDataSource();
  incomelist: any = [];
  mobile:number;
  err:string="";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _incomeservice : IncomeService,private _route:Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._incomeservice.getallincome()
    .subscribe((res) => {
      this.incomelist = res;
      
    if(this.incomelist.length > 0){
      this.dataSource.data = this.incomelist;
    }
    },
    (error) => {
      console.log(error); 
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateIncome(element:income)
  {
   console.log(element.incomeId);
   this._route.navigate(["dashboard/income/updateincome",element.incomeId]);
  }

  addincome(){
    this._route.navigate(["dashboard/income/addincome"]); 
  }

}
