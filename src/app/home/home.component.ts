import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.user = this.auth.getUser();
    } else {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['home']);
  }

}
