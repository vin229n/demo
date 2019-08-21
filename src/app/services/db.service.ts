import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  insertUser(user:User) {
    return this.http.post(this.apiUrl,user);
  }

  getUsers()
  {
    return this.http.get(this.apiUrl);
  }
}
