import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';   
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent,},
  { path: 'home', component:HomeComponent,canActivate:[AuthGuard] }
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AuthenticationService,ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
