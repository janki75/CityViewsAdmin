import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  fund_url:string="http://localhost:8081/adminportal/funds/";
  owner_url:string="http://localhost:8081/adminportal/owner/";
  constructor(private _http:HttpClient) { }
  getallfunds()
  {
   return this._http.get(this.fund_url);
  }
  getallowners()
  {
   return this._http.get(this.owner_url+"active");
  }
  getIdByOwnerName(data){
    return this._http.get(this.owner_url+"byemail/"+data);
  }

  getFundDetailById(data){
    return this._http.get(this.fund_url+"fetch/"+data);
  }

  addFundDetail(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.fund_url,body,{headers:head1});
  }
  editFundDetail(item,id)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.fund_url+id,body,{headers:head1});
  }
}
