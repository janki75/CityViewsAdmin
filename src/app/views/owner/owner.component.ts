import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { OwnerService } from '../../services/owner.service';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  displayedColumns: string[] = [
    "name",
    "contactNo",
    "dateOfPurchase",
    "email",
    "active"
  ];
  dataSource = new MatTableDataSource();
  ownerlist: any = [];
  mobile:number;
  err:string="";
  msg:string="No records are there!!";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _owner : OwnerService,private route:Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._owner.getAllOwner()
    .subscribe((res) => {
      this.ownerlist = res;
      
    if(this.ownerlist.length > 0){
      this.dataSource.data = this.ownerlist;
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

   addOwner(){
     this.route.navigate(['dashboard/owner/addowner']);
   }

}
