import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee_url:string="http://localhost:8081/adminportal/employeeDetails/";
  employeepos_url:string="http://localhost:8081/adminportal/employeePositions/";
  constructor(private _http:HttpClient) { }
  getallemployee()
  {
   return this._http.get(this.employee_url);
  }

  updateStatusToInactive(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.employee_url + data.employeeId + "/inactive",{headers:head1});
  }

  updateStatusToActive(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.employee_url + data.employeeId + "/active",{headers:head1});
  }

  getEmployeeById(data){
    return this._http.get(this.employee_url+"/" +data);
  }

  getAllEmpPosition(){
    return this._http.get(this.employeepos_url);
  }

  updateEmpDetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.employee_url+data.employeeId,body,{headers:head1});
  }

  addEmpDetails(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   
    return this._http.post(this.employee_url,body,{headers:head1});
  }

  getPositionIdByName(data){
    return this._http.get(this.employeepos_url + "byname/"  + data);
  }
}
