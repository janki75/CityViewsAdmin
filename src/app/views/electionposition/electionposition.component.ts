import { Component, OnInit } from '@angular/core';
import { ElectionpositionService } from '../../services/electionposition.service';
import { electionposition_Class } from '../../services/classes/electionposition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electionposition',
  templateUrl: './electionposition.component.html',
  styleUrls: ['./electionposition.component.css']
})
export class ElectionpositionComponent implements OnInit {
arr:electionposition_Class[]=[];
msg:string;
i:number;
id:number;
  constructor(private pos_Ser:ElectionpositionService,private _route:Router) { }

  ngOnInit() {
    this.pos_Ser.getallelectionposition().subscribe(
      (data:any)=>{
       // console.log(data);


       for(this.i=0;this.i<data.length;this.i++)
       {
         if(data[this.i].active==true)
         {

           this.arr.push(data[this.i]);
           console.log(this.arr);


         }

       }
       if(this.arr.length==0 || data.length==0)
       {
         this.msg="No Election Position Record!";
       }


      }
    );
  }
  onaddposition()
  {
    this._route.navigate(['dashboard/electionposition/addelectionposition']);
  }
  onedit(id)
  {
    console.log(id);
    this._route.navigate(['dashboard/electionposition/editelectionposition/',id]);
  }
  ondelete(id)
  {
    console.log(id);
    this.id=id;

  }
onmodaldel()
{
   this.pos_Ser.inactiveelectionposition(this.id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );

    this._route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._route.onSameUrlNavigation = "reload";

    location.reload();

}

}
