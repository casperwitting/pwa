import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PushNotificationsService } from "ng-push";
import { ProductService } from "../product.service";

@Component( {
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.css' ]
} )
export class ProductListComponent implements OnInit {
    products = [];
    inShoppingCartCount: number = 0;
    contentIsLoaded: boolean = false;

    constructor( private productService: ProductService,
                 private route: ActivatedRoute,
                 private _pushNotifications: PushNotificationsService ) {
    }

    ngOnInit() {
        setTimeout( () => {
            return this.fetchProducts();
        }, 1000 ); //Simulate API response time

    }

    fetchProducts() {
        const categoryName = this.route.snapshot.params[ 'categoryName' ];
        if ( categoryName ) {
            this.products = this.productService.getProductsByCategory( categoryName );
        }
        else {
            this.products = this.productService.getProducts();
        }
        this.contentIsLoaded = true;
    }

    onAddToShoppingCart( productId ) {
        this.productService.addProductToShoppingCart( productId );
        this.inShoppingCartCount = this.productService.inShoppingCartCount();
        // this._pushNotifications.requestPermission();
    }

}
