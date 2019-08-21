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
  loading:boolean = false;
  error=false;
  constructor(private auth: AuthenticationService, private router: Router,private api:ApiService) { }
  

  ngOnInit() {
  }

  logout() {
    console.log("Asa");
    this.auth.logOut();
    this.router.navigate(['login']);
  }

  hitApi() {
    this.loading = true
    this.error = false;
    this.api.hit()
    .subscribe(
      data => {this.data=data; console.log("data ",data);this.loading=false},
      error => {console.log("error ",error);this.error=true;this.loading=false}
    );
      
  }

}
