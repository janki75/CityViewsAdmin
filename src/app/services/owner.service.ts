import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owner_url:string="http://localhost:8081/adminportal/owner/";
  
  constructor(private _http:HttpClient) { }
  getAllOwner()
  {
   return this._http.get(this.owner_url);
  }

  getByEmail(data){
    return this._http.get(this.owner_url+"byemail/"+data);
  }

  addOwnerDetail(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.owner_url,body,{headers:head1});
  }
}
