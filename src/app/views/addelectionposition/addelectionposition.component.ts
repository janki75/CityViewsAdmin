import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionpositionService } from '../../services/electionposition.service';
import { electionposition_Class } from '../../services/classes/electionposition';

@Component({
  selector: 'app-addelectionposition',
  templateUrl: './addelectionposition.component.html',
  styleUrls: ['./addelectionposition.component.css']
})
export class AddelectionpositionComponent implements OnInit {
positionId:number;
positionName:string;
  constructor(private _route:Router,private pos_Ser:ElectionpositionService) { }

  ngOnInit() {
  }
  addpos()
  {
 this.pos_Ser.addelectionposition(new electionposition_Class(this.positionId,this.positionName,true)).subscribe(
   (data:any)=>{
     console.log(data);
   }
 );
 alert("Election Position Added!");
 this._route.navigate(['/dashboard/electionposition']);
  }
  cancel()
  {
    this._route.navigate(['/dashboard/electionposition']);
  }

}
