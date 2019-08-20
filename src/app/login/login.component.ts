import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  invalidCredentials:Boolean = false;

  constructor(private auth:AuthenticationService,private router:Router) {
   }

   ngOnInit() {
    this.createForm()
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
          Validators.minLength(10),
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


  logIn()
  {
    if(this.form.valid){
      this.auth.logIn(this.form.value.name,this.form.value.password)
      if(this.auth.isAuth())
        this.router.navigate(['home']);
      else{
        this.invalidCredentials=true
        setTimeout(()=>{
          this.invalidCredentials=false
        },3000)
      }
        
      }
  }

  register()
  {
    this.router.navigate(['register'])
  }
}
