import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _route:Router) { }


  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(localStorage.getItem('ownerId')=="")
    {
   this._route.navigate(['']);
    }
    else{
      return true;
    }
  }
}
