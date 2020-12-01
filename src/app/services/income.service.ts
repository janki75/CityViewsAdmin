import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { income } from './classes/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService { 

  income_url:string="http://localhost:8081/adminportal/income/";

  constructor(private _http:HttpClient) { }
  getallincome()
  {
   return this._http.get(this.income_url);
  } 

  getincomeById(id)
  {
   return this._http.get(this.income_url+id);
  }

  updateincomedetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.income_url+data.incomeId,body,{headers:head1});
  }

  addincomedetails(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   
    return this._http.post(this.income_url,body,{headers:head1});
  }
}
 