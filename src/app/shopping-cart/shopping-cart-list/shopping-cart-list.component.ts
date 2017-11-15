import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/product.service";

@Component( {
    selector: 'app-shopping-cart-list',
    templateUrl: './shopping-cart-list.component.html',
    styleUrls: [ './shopping-cart-list.component.css' ]
} )
export class ShoppingCartListComponent implements OnInit {
    products = [];
    shoppingCartPriceTotal = 0;

    constructor( private productService: ProductService ) {
    }


    ngOnInit() {
        this.products = this.productService.getProductsInShoppingCart();
        this.shoppingCartPriceTotal = this.productService.getShoppingCartPriceTotal();
        console.log( this.products );
    }

}
