import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerServiceService } from '../retailer-service.service';
@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {
  rname=''
  password=''
  invalidLogin=false
  errorMessage='Invalid Credentials';
  successMessage='Login Successfully';
  loginSuccess=false;
  constructor(private router:Router,
    private retailerservice : RetailerServiceService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    let retailer={
      "email":this.rname,
      "password":this.password
    }

    this.retailerservice.login(retailer).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['/productlist']);
        sessionStorage.setItem('rname', this.rname)
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

  retailerRegister() {

    this.router.navigate(['/retailerRegister']).then(() => {
      window.location.reload();
    });
  }
}
