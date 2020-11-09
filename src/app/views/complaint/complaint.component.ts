import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { complaint_Class } from '../../services/classes/complaint';
import { status_class } from '../../services/classes/complaintstatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
complaint_arr:complaint_Class[]=[];
i:number=0;


  constructor(private complaint_service:ComplaintService,private route:Router) { }

  ngOnInit() {
    this.complaint_service.getallcomplaint().subscribe(
      (data:complaint_Class[])=>{
        console.log(data);
        this.complaint_arr=data;



       }
    );




  }

  onprogress(id:number)
  {
  console.log(id);
  this.complaint_service.updatecomplaintstatus(id,new status_class(1)).subscribe(
    (data:any)=>{
      console.log(data);

    }
  );
  this.route.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  this.route.onSameUrlNavigation = "reload";

  location.reload();
  }

  onresolved(id:number)
  {
  console.log(id);
  this.complaint_service.updatecomplaintstatus(id,new status_class(2)).subscribe(
    (data:any)=>{
      console.log(data);

    }
  );
  this.route.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  this.route.onSameUrlNavigation = "reload";

  location.reload();
  }

  onrejected(id:number)
  {
  console.log(id);
  this.complaint_service.updatecomplaintstatus(id,new status_class(3)).subscribe(
    (data:any)=>{
      console.log(data);

    }
  );
  this.route.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
  this.route.onSameUrlNavigation = "reload";

  location.reload();
  }

}
