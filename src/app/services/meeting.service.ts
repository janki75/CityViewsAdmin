import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { meeting } from './classes/meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
meeting_url:string="http://localhost:8081/adminportal/meeting/fetch/";
<<<<<<< HEAD
add_meeting_url:string="http://localhost:8081/adminportal/meeting/";
=======
pastmeeting_url:string="http://localhost:8081/adminportal/meeting/completed/";
upcomingmeeting_url:string="http://localhost:8081/adminportal/meeting/upcoming/";

>>>>>>> 15712ceb2cbc7d70ad54f0d2fc1d3d20052bc718
  constructor(private _http:HttpClient) { }
  getMeetingById(id:number)
  {
   return this._http.get(this.meeting_url+id);
  }
<<<<<<< HEAD
  addMeeting(item:meeting)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   
    return this._http.post(this.add_meeting_url,body,{headers:head1});
=======

  getPastMeeting()
  {
   return this._http.get(this.pastmeeting_url);
  }

  
  getUpcomingMeeting()
  {
   return this._http.get(this.upcomingmeeting_url);
>>>>>>> 15712ceb2cbc7d70ad54f0d2fc1d3d20052bc718
  }
}
