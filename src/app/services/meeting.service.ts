import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { meeting } from './classes/meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
meeting_url:string="http://localhost:8081/adminportal/meeting/fetch/";
add_meeting_url:string="http://localhost:8081/adminportal/meeting/";
  constructor(private _http:HttpClient) { }
  getMeetingById(id:number)
  {
   return this._http.get(this.meeting_url+id);
  }
  addMeeting(item:meeting)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   
    return this._http.post(this.add_meeting_url,body,{headers:head1});
  }
}
