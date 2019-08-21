import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  data:any;
  constructor(private auth: AuthenticationService, private router: Router,private api:ApiService) { }
  

  ngOnInit() {
    this.user = this.auth.getUser();
    if (this.auth.isAuth()) {
      this.user = this.auth.getUser();
    } else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    console.log("Asa");
    this.auth.logOut();
    this.router.navigate(['login']);
  }

  hitApi() {
    this.api.hit()
    .subscribe(
      data => {this.data=data; console.log("data ",data)},
      error => {console.log("error ",error)}
    );
      
  }

}
