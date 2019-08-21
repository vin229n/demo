import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }


}
