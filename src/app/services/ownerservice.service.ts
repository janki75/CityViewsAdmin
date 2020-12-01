import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {
owner_url:string="http://localhost:8081/adminportal/owner/";
  constructor(private http:HttpClient) { }

  getownerbyid(id)
  {
    return this.http.get(this.owner_url+id);
  }
  getallowner()
  {
    return this.http.get(this.owner_url);
  }

}
