import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { employeePosition } from './classes/employeePosition';

@Injectable({
  providedIn: 'root'
})
export class ManagemployeepositionService {
getallposition_url:string='http://localhost:8081/adminportal/employeePositions/';
  constructor(private _http:HttpClient) { }
  getAllEmployeePosition()
  {
    return this._http.get(this.getallposition_url);
  }
  addEmployeePosition(item:employeePosition)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getallposition_url,body,{headers:head1});
  }
}
