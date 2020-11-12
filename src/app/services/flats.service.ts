import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

   flat_url:string="http://localhost:8081/adminportal/flats/";
   occupied_flat_url:string="http://localhost:8081/adminportal/flats/occupied";
   flatownerbyid_url:string="http://localhost:8081/adminportal/owner/6";
  constructor(private _http:HttpClient) { }

  getallflats()
  {
     return this._http.get(this.flat_url);
  }
  getoccupiedflats()
  {
    return this._http.get(this.occupied_flat_url);
  }
  getflatownerdetailbyid(id)
  {
    return this._http.get(this.flatownerbyid_url+id);
  }

}
