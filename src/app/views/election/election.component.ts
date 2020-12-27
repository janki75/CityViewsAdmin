import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ElectionService } from '../../services/election.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  electionDetail:any[] = [];
  electionName : any;
  err : string ="";
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
  endDate : any;
  cnt:number=0;
  constructor(private ele : ElectionService,private router :Router) { }

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
        if(this.eleresult[this.i].active == true){
          if(eleDate < day && eleMonth == month && eleYear == this.year || eleMonth < month && eleYear == this.year || eleYear < this.year){

            const data = {electionId:this.eleresult[this.i].id,electionDate: this.eleresult[this.i].date,electionName:this.eleresult[this.i].electionName,endDate : this.eleresult[this.i].endDate};
            this.electionList.push(data);
         }
         if(eleDate > day && eleMonth == month && eleYear == this.year || eleMonth > month && eleYear == this.year || eleYear > this.year){
           const data = {id : this.eleresult[this.i].id,electionDate: this.eleresult[this.i].date,electionName:this.eleresult[this.i].electionName,endDate : this.eleresult[this.i].endDate};
            this.electionDetail.push(data);
         }
         if(eleDate == day && eleMonth == month && eleYear == this.year)
         {
           this.currElection = this.eleresult[this.i].date + " - " + this.eleresult[this.i].electionName;        
         }
        }
      }
      if(this.currElection != ''){
        alert('There is an election today!!!');
    }
    })

  }

  getDetails(data){
    this.electionName = data.electionName;
    this.electionId = data.id;
    this.eleDate = data.electionDate;
    this.endDate = data.endDate;
    console.log(data);
  }



  updateEleDetails(data){
    this.ele.getallelection()
    .subscribe((res:any) => {
      this.todaydt=new Date();
      var day = this.todaydt.getDate();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear();
    this.finaltodaydt=day+"/"+month+"/"+this.year;
    let startdate = this.eleDate;
    let eleDate = startdate.substring(0,2);
       let eleMonth = startdate.substring(3,5);
       let eleYear = startdate.substring(6,10);
    
       let enddate = this.endDate;
       let endDate = enddate.substring(0,2);
          let endMonth = enddate.substring(3,5);
          let endYear = enddate.substring(6,10);
       
      this.eleresult = res;
      for(this.i = 0;this.i<this.eleresult.length;this.i++){

       let eleDate1 = this.eleresult[this.i].date.substring(0,2);
        let eleMonth1 = this.eleresult[this.i].date.substring(3,5);
        let eleYear1 = this.eleresult[this.i].date.substring(6,10);
        if(this.eleresult[this.i].active == true){
         if(eleDate1 == eleDate && eleMonth1 == eleMonth && eleYear1 == eleYear)
         {
           this.err = "On this date already an election is scheduled!!";
           this.cnt++;
           break;
         }
        }
        this.cnt = 0;
      }
      if(this.cnt == 0){
        if(eleDate > day && eleMonth == month && eleYear == this.year || eleMonth > month && eleYear == this.year || eleYear > this.year){
          if(eleDate <= endDate && eleMonth == endMonth && eleYear == endYear ||  eleMonth < endMonth && eleYear == endYear || eleYear < endYear){

            if(eleDate == 1 || eleDate == 2 || eleDate == 3 || eleDate == 4 || eleDate == 5 || eleDate == 6 || eleDate == 7 || eleDate == 8 || eleDate == 9){
              this.eleDate = "0" + eleDate + "/" + eleMonth + "/" + eleYear;
              
            }
            else
            {
              this.eleDate = eleDate + "/" + eleMonth + "/" + eleYear;
              
            }

            if( endDate == 1 || endDate == 2 || endDate == 3 || endDate == 4 || endDate == 5 || endDate == 6 || endDate == 7 || endDate == 8 || endDate == 9){
              this.endDate = "0" + endDate + "/" + endMonth + "/" + endYear;
            }
            else{
              this.endDate = endDate + "/" + endMonth + "/" + endYear;
            }

            const data1 = {
              electionId:this.electionId,
              electionName : this.electionName,
              date : this.eleDate,
              active : true, 
              endDate : this.endDate
            }
            this.ele.updateElectionName(data1)
            .subscribe((res) => {
        
            })
            this.err = "Election details are updated successfully!!";
            }
            else{
              this.err = "The End date must be equals to or greater than start date!!";  
            }
            
          }
          else{
            this.err = "The date must be greater than current date!!";
          }
      }

    })

  }

  addEleDetails(data){    
    this.ele.getallelection()
    .subscribe((res:any) => {
      this.todaydt=new Date();
      var day = this.todaydt.getDate();
    var month=new Date().getMonth()+1;
    this.year=new Date().getFullYear();
    this.finaltodaydt=day+"/"+month+"/"+this.year;
    let startdate = new Date(this.eleDate);
    let eleDate = startdate.getDate();
    let eleMonth = startdate.getMonth()+1;
    let eleYear = startdate.getFullYear();
    
    let enddate = new Date(this.endDate);
    let endDate = enddate.getDate();
    let endMonth = enddate.getMonth()+1;
    let endYear = enddate.getFullYear();

      this.eleresult = res;
      for(this.i = 0;this.i<this.eleresult.length;this.i++){

       let eleDate1 = this.eleresult[this.i].date.substring(0,2);
        let eleMonth1 = this.eleresult[this.i].date.substring(3,5);
        let eleYear1 = this.eleresult[this.i].date.substring(6,10);
        if(this.eleresult[this.i].active == true){
         if(eleDate1 == eleDate && eleMonth1 == eleMonth && eleYear1 == eleYear)
         {
           this.err = "On this date already an election is scheduled!!";
           this.cnt++;
           break;
         }
        }
        this.cnt = 0;
      }
      if(this.cnt == 0){
        if(eleDate > day && eleMonth == month && eleYear == this.year || eleMonth > month && eleYear == this.year || eleYear > this.year){
          if(eleDate <= endDate && eleMonth == endMonth && eleYear == endYear ||  eleMonth < endMonth && eleYear == endYear || eleYear < endYear){

            if(eleDate == 1 || eleDate == 2 || eleDate == 3 || eleDate == 4 || eleDate == 5 || eleDate == 6 || eleDate == 7 || eleDate == 8 || eleDate == 9){
              this.eleDate = "0" + eleDate + "/" + eleMonth + "/" + eleYear;
              
            }
            else
            {
              this.eleDate = eleDate + "/" + eleMonth + "/" + eleYear;
              
            }

            if( endDate == 1 || endDate == 2 || endDate == 3 || endDate == 4 || endDate == 5 || endDate == 6 || endDate == 7 || endDate == 8 || endDate == 9){
              this.endDate = "0" + endDate + "/" + endMonth + "/" + endYear;
            }
            else{
              this.endDate = endDate + "/" + endMonth + "/" + endYear;
            }

            const data1 = {
              electionName : this.electionName,
              date : this.eleDate,
              active : true, 
              endDate : this.endDate
            }
            this.ele.addElectionDetail(data1)
            .subscribe((res) => {
        
            })
            this.err = "Election is arranged successfully!!";
            }
            else{
              this.err = "The End date must be equals to or greater than start date!!";  
            }
            
          }
          else{
            this.err = "The date must be greater than current date!!";
          }
      }

    })

    
      
  }

  getDetails1(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        electionId: data.electionId,
      },
    };
    this.router.navigate(['dashboard/election/pastelection/viewresults'],navigationExtras);    
  }

  updateStatus(){
    this.ele.updatestatus(this.electionId)
    .subscribe((res)=> {
      alert('Election cancelled successfully!!');
    })
  }
}
