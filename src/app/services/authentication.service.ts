import { Injectable } from '@angular/core';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users:User[] = []
  isAuthenticated:Boolean = false
  constructor() { }

  isAuth()
  {
    return this.isAuthenticated
  }

  logIn(username:String,password:String):Boolean
  {
    this.users.forEach((user)=>{
      if(user.name === username && password === user.password)
      {
        alert("yes")
        this.isAuthenticated = true
        return true
      }      
    })
    return false
  }

  register(username:String,password:String)
  {
    let user:User = new User()
    user.name = username
    user.password = password
    this.users.push(user)

    console.log('in register of authService',this.users)
  }
}
