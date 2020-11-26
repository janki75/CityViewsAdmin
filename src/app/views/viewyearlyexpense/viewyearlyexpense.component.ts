import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-viewyearlyexpense',
  templateUrl: './viewyearlyexpense.component.html',
  styleUrls: ['./viewyearlyexpense.component.css']
})
export class ViewyearlyexpenseComponent implements OnInit {
totalExp:number=0;
currYear:number;
exp:any[] = [];
i:number = 0;
totalIncome:number=0;
income:any[] = [];
totalFund:number=0;
fund:any[] = [];
totalMaint:number=0;
maint:any[] = [];
  constructor(private expense : ExpenseService) { }

  ngOnInit() {
    let currDate = new Date();
      this.currYear = currDate.getFullYear();
    this.expense.getExpDetail()
    .subscribe((res:any) =>{
      this.exp=res;
      for(this.i=0;this.i<this.exp.length;this.i++){
        let date1 = this.exp[this.i].date;
        let year = date1.substring(6,10);
        if(year == this.currYear){
          this.totalExp += this.exp[this.i].amount; 
        }
      } 
    })

    this.expense.getIncome()
    .subscribe((res:any) =>{
      this.income=res;
      for(this.i=0;this.i<this.income.length;this.i++){
        let date1 = this.income[this.i].date;
        let year = date1.substring(6,10);
        if(year == this.currYear){
          this.totalIncome += this.income[this.i].amount; 
        }
      }
      
    })

    this.expense.getMaint()
    .subscribe((res:any) =>{
      this.maint=res;
      for(this.i=0;this.i<this.maint.length;this.i++){
        let date1 = this.maint[this.i].date;
        let year = date1.substring(6,10);
        if(year == this.currYear){
        this.totalMaint += this.maint[this.i].amount; 
        }
      }
      
    })

    this.expense.getFunds()
    .subscribe((res:any) =>{
      this.fund=res;
      for(this.i=0;this.i<this.fund.length;this.i++){
        let date1 = this.fund[this.i].date;
        let year = date1.substring(6,10);
        if(year == this.currYear){
        this.totalFund += this.fund[this.i].amount; 
        }
      }
      
    })
  }

}
