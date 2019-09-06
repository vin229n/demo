import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  @Output() gotSearchResults: EventEmitter<any> = new EventEmitter<any>();
  searchText: string;
  loading = false;
  user: User;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  logout() {
    this.auth.logOut();
    this.router.navigate(['login']);
  }





}
