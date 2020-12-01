import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.css']
})
export class ViewresultsComponent implements OnInit {
sub:any;
electionId:any;
mySubscription:any;
eleDetail:any[] = []; 
i:any;
pos:any[] = [];
result:any[] = [];
eleResDetail:any[] = [];
max:number = 0;
winner:string="";
j:number=1;
msg="No records found!!";
  constructor(private route:ActivatedRoute,private router : Router,private ele : ElectionService) { 
    
  }

  ngOnInit() {
     
    this.sub = this.route.queryParams.subscribe((params) => {
      this.electionId = params["electionId"];
      if (this.electionId) {
        
      }
    });

    
    this.ele.getPosition()
    .subscribe((res:any) => {
      this.result = res;
      for(this.i = 0;this.i<this.result.length;this.i++){
            if(this.result[this.i].active == true){
              const data1 = {id:this.result[this.i].id,pos:this.result[this.i].name}
              this.pos.push(data1);
            }
      }
    })
  }

  getDetails(data){
    this.ele.getelectionresult(this.electionId)
        .subscribe((res:any) => {
          this.eleDetail = res;
          console.log(this.eleDetail);
          for(this.i =0;this.i<this.eleDetail.length;this.i++){
            if(this.eleDetail[this.i].positionName == data.pos){
              if(this.max < this.eleDetail[this.i].voteCount){
                      this.max = this.eleDetail[this.i].voteCount;
                      this.winner = this.eleDetail[this.i].ownerName;
                }
                const data1 = {no:this.j++,ownername:this.eleDetail[this.i].ownerName,vote:this.eleDetail[this.i].voteCount}                
                this.eleResDetail.push(data1);
            }
          }
        })
        this.j=1;
        this.max = 0;
        this.winner = "";
        this.eleResDetail.splice(0,this.eleResDetail.length);
  }

}
