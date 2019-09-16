import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getWeather(address){
    const url = 'api/weather?address='+address;
    return this.http.get(url);
  }

}
