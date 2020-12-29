import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { FundsService } from '../../services/funds.service';


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  displayedColumns: string[] = [
    "ownerName",
    "amount",
    "date",
    "reason",
    "action",
  ];
  dataSource = new MatTableDataSource();
  fundlist: any = [];
  mobile:number;
  err:string="";
  msg:string="No records are there!!";
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _fund : FundsService,private route:Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._fund.getallfunds()
    .subscribe((res:any) => {
      this.fundlist = res;
      console.log(this.fundlist);
    if(this.fundlist.length > 0){
      this.dataSource.data = this.fundlist;
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

  addFund(){
    this.route.navigate(['dashboard/funds/addfund']);
  }

  updateFundDetails(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        fundId: data.id,
      },
    };
    this.route.navigate(['dashboard/funds/updatefund'],navigationExtras);
  }
}
