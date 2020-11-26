import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  electionDetail:any[] = [];
  constructor(private ele : ElectionService) { }

  ngOnInit() {
    this.ele.getallelection()
    .subscribe((res:any) => {
      this.electionDetail = res;
      console.log(res);
    })

  }

}
