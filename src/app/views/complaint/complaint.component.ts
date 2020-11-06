import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { complaint_Class } from '../../services/classes/complaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
complaint_arr:complaint_Class[]=[];

  constructor(private complaint_service:ComplaintService) { }

  ngOnInit() {
    this.complaint_service.getallcomplaint().subscribe(
      (data:complaint_Class[])=>{
        console.log(data);
        this.complaint_arr=data;

       }
    );

  }

}
