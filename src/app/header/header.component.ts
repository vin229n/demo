import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() gotSearchResults: EventEmitter<any> = new EventEmitter<any>();
  searchText: string;
  loading = false;
  constructor(private auth: AuthenticationService, private router: Router, private api: ApiService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logOut();
    this.router.navigate(['login']);
  }

  onSubmit() {
    if (this.searchText !== undefined) {
      this.loading = true;
      this.getLocation();
    } else {
      this.toastr.error('Please provide address');
    }
  }

  getLocation()
  {
    this.api.getLocation(this.searchText)
      .subscribe(
        (res: any) => {
          if (res.features.length !== 0 ) {
            this.getWeather(res)
          } else {
            this.toastr.error('Sorry! Not able to find location');
            this.loading = false;
          }
        },
        (err) => { 
          this.toastr.error('Sorry! Not able to find location');
           this.loading = false; 
        }
      );
  }

  getWeather(res)
  {
    this.api.hit(res.features[0].center[1], res.features[0].center[0])
    .subscribe(
      (data) => {
        this.gotSearchResults.emit({data, location: res.features[0].place_name });
        this.loading = false ; console.log(data);
       },
      (err) => { 
        this.toastr.error('Please provide address'); 
        this.loading = false;
       }
    );
  }

}
