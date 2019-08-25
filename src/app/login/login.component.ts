import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  invalidCredentials = false;
  loading = false;
  connection = true;

  constructor(private auth: AuthenticationService, private router: Router) {
   }

   ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ],
      ),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      )
    });
  }

  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }


  logIn() {
    if (this.form.valid) {
      this.invalidCredentials = false;
      this.connection = true;
      this.loading = true;
      this.auth.getUsers()
      .subscribe(
        (users: User[]) => {
          users.forEach((user) => {
            if (user.name === this.form.value.name && user.password === this.form.value.password) {
              this.auth.logIn(user);
              this.router.navigate(['home']);
              return;
            }
          });
          this.invalidCredentials = true;
          this.loading = false;
          setTimeout(() => {
            this.invalidCredentials = false;
          }, 3000);
        },
        (error) => {
          console.log('Error in AuthenticationService login', error);
          this.loading = false;
          this.connection = false;
        }
      );
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
