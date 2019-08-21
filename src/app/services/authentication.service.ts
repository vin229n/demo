import { Injectable, OnInit } from '@angular/core';
import {User} from '../models/user'
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{
  
  private currentUser: User;
  private authenticated = false;
  
  constructor(private db:DbService) { }
  
  ngOnInit(): void {
    console.log("authentication servce init");
    

  }

  isAuth() {
    return this.authenticated;
  }

  getUser() {
    return this.currentUser;
  }

  logIn(username: string, password: string) {
    
    this.db.getUsers()
    .subscribe(
      (users:User[]) => {
        users.forEach((user) => {
          if (user.name === username && password === user.password) {
            this.authenticated = true ;
            this.currentUser = user;
          }
        });
      },
      (error) => {
        console.log("Error in AuthenticationService login",error)
      }
    );


  }

  register(username: string, password: string) {
    const user: User = new User() ;
    user.name = username;
    user.password = password;
    // this.users.push(user);
    this.db.insertUser(user).subscribe(
      (user:User) => {console.log("added user successfully",user)},
      (error) =>{console.log("Error in register:",error)}
    )

    // json-server --watch db.json
  }

  logOut() {
    this.authenticated = false;
    this.currentUser = null;
  }

}
