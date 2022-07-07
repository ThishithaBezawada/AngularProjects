import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  email: any;
  user: User | any;
  constructor(private route: ActivatedRoute,private router: Router,
    private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.user = new User();
 
    this.email = this.route.snapshot.params['email'];

    this.userservice.getUser(this.email)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }
  cart() {

    this.router.navigate(['cart']);
  }

  compare() {

    this.router.navigate(['compare']);
  }

  orders() {

    this.router.navigate(['my orders']);
  }

}
