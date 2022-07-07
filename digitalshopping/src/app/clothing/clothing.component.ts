import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdListService } from '../prod-list.service';
import { ProductService } from '../product.service';
import { CartService } from '../cartservices.service';
import { CompareService } from '../compare.service';
import { Product } from '../product';
@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  products: any;
  product: Product = new Product();
  category = "Clothing";

  constructor(private data:ProdListService,
    private compareservice:CompareService,
    public cartservice:CartService,
    private router:Router,
    public productservice:ProductService) { }

  ngOnInit(): void {
    this.data.getProductByCategory(this.category).subscribe(data => {
      this.products = data
      console.log(this.products);
    }
  );
  }
  gotocart(id : string | any) {

    this.productservice.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
      this.addtocart();
    }
    );
  
  }

  addtocart(){

    this.cartservice.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoc();
  }
  gotoc() {

    this.router.navigate(['addToCart']);
  }

  gotocompare(id : string | any) {

    this.productservice.getProduct(id).subscribe(data => {
      this.product = data
      console.log(this.product);
      this.addtocompare();
    }
    );
  
  }

  addtocompare(){
    
    this.compareservice.newProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.goto();
  }
  goto() {

    this.router.navigate(['compare']);
  }

}
