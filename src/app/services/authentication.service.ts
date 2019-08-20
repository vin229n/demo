import { Injectable } from '@angular/core';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: User[] = [];
  currentUser: User;
  private authenticated = false;
  constructor() { }

  isAuth() {
    return this.authenticated;
  }

  getUser() {
    return this.currentUser;
  }

  logIn(username: string, password: string) {
    this.users.forEach((user) => {
      if (user.name === username && password === user.password) {
        this.authenticated = true ;
        this.currentUser = user;
      }
    });
  }

  register(username: string, password: string) {
    const user: User = new User() ;
    user.name = username;
    user.password = password;
    this.users.push(user);

    console.log('in register of authService', this.users);
  }

  logOut() {
    this.authenticated = false;
    this.currentUser = null;
  }

}
