import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  salary_url:string = "http://localhost:8081/adminportal/salary/";

  constructor(private http : HttpClient) { }
  
  getSalDetail(){
    return this.http.get(this.salary_url);
  }
  getSalDetailById(data){
    return this.http.get(this.salary_url+"fetch/"+data);
  }

  editSalary(item,id)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.salary_url+id,body,{headers:head1});
  }

  addSalary(data){
    let body=JSON.stringify(data);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.salary_url,body,{headers:head1});
  }
}
