import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getWeather(address){
    const url = 'http://localhost:8000/weather?address='+address;
    return this.http.get(url);
  }

}
