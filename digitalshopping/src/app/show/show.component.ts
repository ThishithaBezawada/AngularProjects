import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  gotoshop() {

    this.router.navigate(['productList']);
  }

}
