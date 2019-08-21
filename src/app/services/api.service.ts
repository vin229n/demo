import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  hit() {
    let url = 'https://cors-anywhere.herokuapp.com/https://jira.brillio.com/rest/api/2/search?jql=project=BOPD';
    let authorizationData = 'Basic YnJpbGxpby1qaXJhOkJyaWxsaW9BZG1pbg==';

    const headerOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization':  authorizationData
      })
    };
    return this.http.get(url, headerOptions);
  }

}
