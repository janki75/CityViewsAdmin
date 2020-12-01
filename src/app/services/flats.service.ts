import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { flat_Class } from './classes/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

   flat_url:string="http://localhost:8081/adminportal/flats/";
   occupied_flat_url:string="http://localhost:8081/adminportal/flats/occupied";
   vacant_flat_url:string="http://localhost:8081/adminportal/flats/vacant";
   flatid_url:string="http://localhost:8081/adminportal/flats/fetch/";


  constructor(private _http:HttpClient) { }

  getallflats()
  {
     return this._http.get(this.flat_url);
  }
  getoccupiedflats()
  {
    return this._http.get(this.occupied_flat_url);
  }
  getvacantflats()
  {
    return this._http.get(this.vacant_flat_url);
  }
  addflats(item:any)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.flat_url,body,{headers:head1});
  }
  updatetonotoccupiedflat(id)
  {
    let body=JSON.stringify("");
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.flat_url+id+"/vacant",body,{headers:head1});
  }
  editflats(item:flat_Class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.flat_url+item.flatId,body,{headers:head1});
  }
  getflatbyid(id)
  {
       return this._http.get(this.flatid_url+id);
  }



}
