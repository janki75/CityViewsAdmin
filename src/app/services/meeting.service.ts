import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
meeting_url:string="http://localhost:8081/adminportal/meeting/fetch/";

  constructor(private _http:HttpClient) { }
  getMeetingById(id:number)
  {
   return this._http.get(this.meeting_url+id);
  }
}
