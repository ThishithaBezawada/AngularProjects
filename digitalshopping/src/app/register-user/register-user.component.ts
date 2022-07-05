import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;
  City: any = ['Hyderbad','Chennai', 'Delhi', 'Kolkatta','Mumbai','Banglore','vizag','vijayawada' ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
      
  });
  }
  get f() { return this.registerForm.controls; }
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }


  onSubmit() {
    this.submitted = true;
   // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    this.save();
  }
  save() {

     }
  
    

  
}
