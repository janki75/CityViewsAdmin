import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { maintenance } from './classes/maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  maintenance_url:string="http://localhost:8081/adminportal/maintenance/";
  getbyid_url:string='http://localhost:8081/adminportal/maintenance/fetch/';
  duemaintenance_url:string='http://localhost:8081/adminportal/maintenance/nonpaid/';
  constructor(private http:HttpClient) { }
  getAllMaintenance()
  {
    return this.http.get(this.maintenance_url);
  }
  addMaintenance(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.maintenance_url,body,{headers:head1});
  }
  getMaintenanceById(id:number)
  {
    return this.http.get(this.getbyid_url+id);
  }
  updateMaintainance(item)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.maintenance_url+item.maintenance_id,body,{headers:head1});

  }
  getAllDueMaintenance()
  {
    return this.http.get(this.duemaintenance_url);
  }
}
