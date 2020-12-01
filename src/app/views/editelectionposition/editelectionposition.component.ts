import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,Params} from '@angular/router';
import { ElectionpositionService } from '../../services/electionposition.service';
import { electionposition_Class } from '../../services/classes/electionposition';

@Component({
  selector: 'app-editelectionposition',
  templateUrl: './editelectionposition.component.html',
  styleUrls: ['./editelectionposition.component.css']
})
export class EditelectionpositionComponent implements OnInit {
positionId:number;
positionName:string;
active:boolean;
  constructor(private _route:Router,private pos_Ser:ElectionpositionService,private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.actroute.params.subscribe(
      (x:Params)=>{
        this.positionId=x['id'];
        this.pos_Ser.getelectionpositionbyid(this.positionId).subscribe(
          (data:any)=>{
            console.log(data);
            this.positionId=data.id;
            this.positionName=data.name;
            this.active=data.active;

          }
        );
      }
    );

  }
  onedit()
  {
    this.pos_Ser.editelectionposition(new electionposition_Class(this.positionId,this.positionName,this.active)).subscribe(
      (data:any)=>{
        console.log(data);

      }
    );
    alert("Election Position Updated Successfully!");
        this._route.navigate(['/dashboard/electionposition']);

  }
  cancel()
  {
    this._route.navigate(['/dashboard/electionposition']);
  }

}
