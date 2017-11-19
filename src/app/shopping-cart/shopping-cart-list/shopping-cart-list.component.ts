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

    fetchShoppingCart() {
        this.products = this.productService.getProductsInShoppingCart();
        this.shoppingCartPriceTotal = this.productService.getShoppingCartPriceTotal();
    }

    ngOnInit() {
        this.fetchShoppingCart();
    }

    swipe(productId: number) {
        this.productService.removeProductFromShoppingCart(productId);
        console.log(productId);
        this.fetchShoppingCart();

    }

}
