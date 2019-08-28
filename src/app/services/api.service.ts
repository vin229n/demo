import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  hit(lat: string = '12.9716', lang: string = '77.5946') {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/522bb5225180bbf1a93af4cb87c980c8/' + lat + ',' + lang;
    return this.http.get(url);
  }

  getLocation(address) {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?' +
    'access_token=pk.eyJ1IjoidmluYXlha3BhdGlsIiwiYSI6ImNqemRxYm82eDAwaGozY284MDYwc2J6azkifQ.M2fbgDCGQN9QEiZg9XyoAg&limit=1';
    return this.http.get(url);
  }

}
