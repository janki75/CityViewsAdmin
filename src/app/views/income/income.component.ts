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
  incomelist:income[] = [];
  mobile:number;
  err:string="";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _incomeservice : IncomeService,private _route:Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._incomeservice.getallincome()
    .subscribe((res:income[]) => {
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

  deleteincome(element:income){
    console.log(element.incomeId);
    this._incomeservice.delincomedetails(element).subscribe(
      (data:any)=>{
        console.log(data);
        this.incomelist.splice(this.incomelist.indexOf(element),1);
        
        this.dataSource.data=this.incomelist;
        this.ngOnInit();
        }
      );
      this._route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this._route.onSameUrlNavigation = "reload";
      this._route.navigate(["/dashboard/income"]);
      location.reload();
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
