import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  election_url:string="http://localhost:8081/adminportal/election/";
  constructor(private _http:HttpClient) { }
  getallelection()
  {
   return this._http.get(this.election_url);
  }
}
