import { Injectable, OnInit } from '@angular/core';
import {User} from '../models/user'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: User;
  private authenticated = false;
  private apiUrl = 'http://localhost:3000/users';
  constructor( private http: HttpClient) { }

  isAuth() {
    return this.authenticated;
  }

  getUser() {
    return this.currentUser;
  }

  logIn(user: User) {
    this.authenticated = true;
    this.currentUser = user;
  }

  register(username: string, password: string) {
    const user: User = new User() ;
    user.name = username;
    user.password = password;
    return this.insertUser(user);
  }

  logOut() {
    this.authenticated = false;
    this.currentUser = null;
  }


  insertUser(user: User) {
    return this.http.post(this.apiUrl, user);
  }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

}
