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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private auth:AuthenticationService,private router:Router) { }

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

  register()
  {
    if(this.form.valid){
      this.auth.register(this.form.value.name, this.form.value.password)
      .subscribe(
          (userr: User) => {console.log('added user successfully', userr);
            this.router.navigate(['login']);
          },
          (error) => {console.log('Error in register:', error);
          });
      
      }
  }
  
  

}
