import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { complaint_Class } from './classes/complaint';
import { status_class } from './classes/complaintstatus';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

   complaint_url:string="http://localhost:8081/adminportal/complaints/";

  constructor(private _http:HttpClient) { }
  getallcomplaint()
  {
   return this._http.get(this.complaint_url);
  }
  getcomplaintbyid(id)
  {
   return this._http.get(this.complaint_url+id);
  }
  updatecomplaintstatus(id,item:status_class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.complaint_url+id+"/"+"status",body,{headers:head1});
  }

}
