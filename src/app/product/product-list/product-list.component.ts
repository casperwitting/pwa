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
    inShoppingCartCount = 0;

    constructor( private productService: ProductService,
                 private route: ActivatedRoute,
                 private _pushNotifications: PushNotificationsService ) {
    }

    ngOnInit() {
        const categoryName = this.route.snapshot.params[ 'categoryName' ];
        if ( categoryName ) {
            this.products = this.productService.getProductsByCategory( categoryName );
        }
        else {
            this.products = this.productService.getProducts();
        }
    }

    onAddToShoppingCart( product_id ) {
        this.productService.addProductToShoppingCart( product_id );
        this.inShoppingCartCount = this.productService.inShoppingCartCount();
        this._pushNotifications.requestPermission();
    }

}
