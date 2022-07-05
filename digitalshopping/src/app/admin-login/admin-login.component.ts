import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  aname=''
  password=''
  invalidLogin=false
  errorMessage='Invalid Credentials';
  successMessage='Login Successfully';
  loginSuccess=false;
  constructor(
    private router:Router,
    private adminservice : AdminServiceService)  { }

  ngOnInit(): void {
  }
  checkLogin() {
    let admin={
      "email":this.aname,
      "password":this.password
    }

    this.adminservice.login(admin).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['/retailerslist']);
        sessionStorage.setItem('aname', this.aname)
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

  adminRegister() {

    this.router.navigate(['/adminRegister']).then(() => {
      window.location.reload();
    });
  }

}
