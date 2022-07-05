import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username=''
  password=''
  invalidLogin=false
  errorMessage='Invalid Credentials';
  successMessage='Login Successfully';
  loginSuccess=false;

  constructor(
    private router:Router,
    private userservice : UserServiceService
  ) { }

  ngOnInit(): void {
  }

  checkLogin(username : string | any) {
    let user={
      "email":this.username,
      "password":this.password
    }

    this.userservice.login(user).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['userprofile',username]);
        sessionStorage.setItem('username', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
      });
   
    this.loginSuccess = false;
  }

  userRegister() {

    this.router.navigate(['register-user']).then(() => {
      window.location.reload();
    });
  }

}

