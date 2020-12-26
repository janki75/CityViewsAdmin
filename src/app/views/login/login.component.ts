import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private _route:Router) { }

  ngOnInit() {
   

  }
  onclick()
  {
    if(this.email=='admin@gmail.com' && this.password=='admin@cityviews@123')
    {
      localStorage.setItem('ownerId',0+"");
      this._route.navigate(['/dashboard']);
    }
    else{
      alert("Invalid email id and password!!");
    }
  }

}
