import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { electionposition_Class } from './classes/electionposition';

@Injectable({
  providedIn: 'root'
})
export class ElectionpositionService {
electionposition_url:string="http://localhost:8081/adminportal/electionPosition/";
positionbyid:string="http://localhost:8081/adminportal/electionPosition/fetch/";
  constructor(private http:HttpClient) { }

  getallelectionposition()
  {
    return this.http.get(this.electionposition_url);
  }
  addelectionposition(item:any)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.electionposition_url,body,{headers:head1});
  }
  getelectionpositionbyid(id)
  {
    return this.http.get(this.positionbyid+id);
  }
  editelectionposition(item:electionposition_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.electionposition_url+item.positionId,body,{headers:head1});
  }
  inactiveelectionposition(id)
  {
    let body=JSON.stringify("");
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.electionposition_url+id+"/inactive",body,{headers:head1});
  }

}
