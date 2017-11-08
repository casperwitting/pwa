import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  inShoppingCartCount = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onAddToShoppingCart(product_id) {
    this.productService.addProductToShoppingCart(product_id);
    this.inShoppingCartCount = this.productService.inShoppingCartCount();
  }

}
