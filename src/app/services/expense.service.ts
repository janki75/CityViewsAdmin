import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expense_url:string = "http://localhost:8081/adminportal/expense/";
  fund_url:string = "http://localhost:8081/adminportal/funds/";
  maint_url:string = "http://localhost:8081/adminportal/maintenance/";
  income_url:string = "http://localhost:8081/adminportal/income/";
  constructor(private http : HttpClient) { }


  getExpDetail(){
    return this.http.get(this.expense_url);
  }

  getById(id){
    return this.http.get(this.expense_url+id);
  }

  editExpense(item,id)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.expense_url+id,body,{headers:head1});
  }

  addExpDetails(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.expense_url,body,{headers:head1});
  }

  getIncome(){
    return this.http.get(this.income_url);
  }

  getMaint(){
    return this.http.get(this.maint_url);
  }

  getFunds(){
    return this.http.get(this.fund_url);
  }
}
