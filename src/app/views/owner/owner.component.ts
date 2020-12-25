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
    "active",
    "action"
  ];
  dataSource = new MatTableDataSource();
  ownerlist: any = [];
  owners: any = [];
  mobile:number;
  err:string="";
  i:number=0;
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
      
      for(this.i=1;this.i<this.ownerlist.length;this.i++){
        this.owners.push(this.ownerlist[this.i]);
      }

    if(this.ownerlist.length > 0){
      this.dataSource.data = this.owners;
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

   updateStatus(data){
     const data1 = {
       ownerId : data.id
     }

     this._owner.updateStatus(data1)
     .subscribe((res) => {

     })
     this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.route.onSameUrlNavigation = "reload";
    this.route.navigate(["/dashboard/owner"]);
    location.reload();
     
   }

   updateStatus1(data){
     const data1 = {
       ownerId : data.id
     }

     this._owner.updateStatus1(data1)
     .subscribe((res) => {
       
     })
     this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.route.onSameUrlNavigation = "reload";
    this.route.navigate(["/dashboard/owner"]);
    location.reload();
  }
}
