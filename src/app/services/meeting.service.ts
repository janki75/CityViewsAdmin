import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { meeting } from './classes/meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
meeting_url:string="http://localhost:8081/adminportal/meeting/fetch/";
add_meeting_url:string="http://localhost:8081/adminportal/meeting/";
pastmeeting_url:string="http://localhost:8081/adminportal/meeting/completed/";
upcomingmeeting_url:string="http://localhost:8081/adminportal/meeting/upcoming/";

  constructor(private _http:HttpClient) { }
  getMeetingById(id)
  {
   return this._http.get(this.meeting_url+id);
  }
  addMeeting(item:any)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.add_meeting_url,body,{headers:head1});
  }
  editMeeting(item:meeting)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.add_meeting_url+item.meetingId,body,{headers:head1});
  }
  getPastMeeting()
  {
   return this._http.get(this.pastmeeting_url);
  }


  getUpcomingMeeting()
  {
   return this._http.get(this.upcomingmeeting_url);
  }
deletemeeting(id)
{
  let body=JSON.stringify("");
  let head1=new HttpHeaders().set('Content-Type','application/json');

  return this._http.put(this.add_meeting_url+id+"/inactive",body,{headers:head1});
}
}
