import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProdListService } from '../prod-list.service';
import { ProductService } from '../product.service';
import { CartService } from '../cartservices.service';
import { CompareService } from '../compare.service';
import { Product } from '../product';
@Component({
  selector: 'app-eletronics',
  templateUrl: './eletronics.component.html',
  styleUrls: ['./eletronics.component.css']
})
export class EletronicsComponent implements OnInit {
  products: any;
  product: Product = new Product();
  category = "Eletronics";
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
