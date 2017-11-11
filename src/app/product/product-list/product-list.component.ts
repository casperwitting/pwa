import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  inShoppingCartCount = 0;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const categoryName = this.route.snapshot.params['categoryName'];
    if (categoryName) {
      this.products = this.productService.getProductsByCategory(categoryName);
    }
    else {
      this.products = this.productService.getProducts();
    }
  }

  onAddToShoppingCart(product_id) {
    this.productService.addProductToShoppingCart(product_id);
    this.inShoppingCartCount = this.productService.inShoppingCartCount();
  }

}
