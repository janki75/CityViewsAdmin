import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  election_url:string="http://localhost:8081/adminportal/election/";
  electionResult_url:string="http://localhost:8081/adminportal/electionResult/";
  constructor(private _http:HttpClient) { }
  getallelection()
  {
   return this._http.get(this.election_url);
  }

  updateElectionName(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.election_url+item.electionId,body,{headers:head1});
  }

  addElectionDetail(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.election_url,body,{headers:head1});
  }

  getelectionresult()
  {
    return this._http.get(this.electionResult_url);
  }
}
