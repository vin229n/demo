import { Injectable, OnInit } from '@angular/core';
import {User} from '../models/user'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: User;
  // private apiUrl = 'http://localhost:3000/users';
  private apiUrl = 'http://localhost:8000/';
  constructor( private http: HttpClient) { }

  isAuth() {
    if (localStorage.length > 0) {
      this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    return this.currentUser;
  }

  logIn(user: User) {
    this.currentUser = user;
    const key = 'userInfo';
    localStorage.setItem(key, JSON.stringify(this.currentUser));
  }

  register(username: string, password: string) {
    const user: User = new User() ;
    user.name = username;
    user.password = password;
    return this.insertUser(user);
  }

  logOut() {
    localStorage.clear();
    this.currentUser = null;
  }


  insertUser(user: User) {
    return this.http.post(this.apiUrl+'register', user);
  }

  getUsers() {
    console.log("sadjsakdjd")
    return this.http.get(this.apiUrl+'users');
  }

}
