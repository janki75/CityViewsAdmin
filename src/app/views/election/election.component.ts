import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
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
  finaltodaydt:any;
  eleresult:any[] = [];
  i:number;
  electionList:any[] = [];
  currElection : any = "";
  constructor(private ele : ElectionService) { }

  ngOnInit() {


    this.ele.getallelection()
    .subscribe((res:any) => {
      this.todaydt=new Date();
      var day = this.todaydt.getDate();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear();
    this.finaltodaydt=day+"/"+month+"/"+this.year;
      this.eleresult = res;
      for(this.i = 0;this.i<this.eleresult.length;this.i++){
          
        let eleDate = this.eleresult[this.i].date.substring(0,2);
        let eleMonth = this.eleresult[this.i].date.substring(3,5);
        let eleYear = this.eleresult[this.i].date.substring(6,10);
        if(eleDate < day && eleMonth == month && eleYear == this.year || eleMonth < month && eleYear == this.year || eleYear < this.year){

             const data = {electionDate: this.eleresult[this.i].date,electionName:this.eleresult[this.i].electionName};
             this.electionList.push(data);
          }
          if(eleDate > day && eleMonth == month && eleYear == this.year || eleMonth > month && eleYear == this.year || eleYear > this.year){
            const data = {electionDate: this.eleresult[this.i].date,electionName:this.eleresult[this.i].electionName};
             this.electionDetail.push(data);
          }
          if(eleDate == day && eleMonth == month && eleYear == this.year)
          {
            this.currElection = this.eleresult[this.i].date + " - " + this.eleresult[this.i].electionName;        
              if(this.currElection != ' '){
                alert('There is an election today!!!');
              }
          }
      }

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

  addEleDetails(data){
    this.todaydt=new Date();
      var day = this.todaydt.getDate();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear();
    this.finaltodaydt=day+"/"+month+"/"+this.year;
    let eleDate = this.eleDate.substring(0,2);
    let eleMonth = this.eleDate.substring(3,5);
    let eleYear = this.eleDate.substring(6,10);

    if(eleDate > day && eleMonth == month && eleYear == this.year || eleMonth > month && eleYear == this.year){

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
  }

  getDetails1(data){
    console.log(data);
  }
}
