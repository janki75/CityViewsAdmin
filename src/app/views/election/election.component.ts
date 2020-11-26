import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  electionDetail:any[] = [];
  electionName : any;
  err : string;
  electionId : any;
  date : any;
  eleDate : any;
  todaydt : any;
  year:any;
  constructor(private ele : ElectionService) { }

  ngOnInit() {
    this.ele.getallelection()
    .subscribe((res:any) => {
      this.electionDetail = res;
    })

  }

  getDetails(data){
    this.electionName = data.electionName;
    this.electionId = data.id;
    this.date = data.date;
  }

  updateEleDetails(data){
    const data1 = {
      electionId : this.electionId,
      date : this.date,
      electionName : this.electionName
    }
    this.ele.updateElectionName(data1)
    .subscribe((res) => {

    })
    this.err = "Election heading is updated successfully!!";
  }

  /*addEleDetails(data){
    this.todaydt=new Date().toString();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear().toString();
    
        console.log(eleDate > date);
    if(eleDate >= date){
      const data1 = {
        electionName : this.electionName,
        date : this.eleDate 
      }
      this.ele.addElectionDetail(data1)
      .subscribe((res) => {
  
      })
      this.err = "Election is arranged successfully!!";
    }
    else{
      this.err = "The date must be greater than current date!!";
    }
  }*/
}
