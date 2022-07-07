import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-retailer-products-list',
  templateUrl: './retailer-products-list.component.html',
  styleUrls: ['./retailer-products-list.component.css']
})
export class RetailerProductsListComponent implements OnInit {
  products: Observable<Product[]> | any;
  constructor(private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.products = this.productService.getProductList();
  }

  productDetails(id: string){
    this.router.navigate(['productdetails', id]);
  }

  editProduct(id: string) {
    this.router.navigate(['updateproduct',id])  // navigate to component from a method
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
