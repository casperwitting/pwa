import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";

@Component( {
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: [ './product-detail.component.css' ]
} )
export class ProductDetailComponent implements OnInit {
    product: Product;
    relatedProducts = [];
    inShoppingCartCount: number;

    constructor( private productService: ProductService,
                 private route: ActivatedRoute ) {
    }

    ngOnInit() {
        this.fetchProduct();
        this.fetchRelatedProducts();
        console.log( this.relatedProducts );
    }

    onAddToShoppingCart( productId ) {
        this.productService.addProductToShoppingCart( productId );
        this.inShoppingCartCount = this.productService.inShoppingCartCount();
    }

    fetchProduct( productId? ) {
        console.log(productId);
        let id = productId ? productId : +this.route.snapshot.params[ 'id' ];
        this.product = this.productService.getProduct( id );
        console.log(this.product);
    }

    fetchRelatedProducts() {
        this.relatedProducts = this.productService.getRelatedProducts();
    }

    switchProduct( productId ) {
        this.fetchProduct( productId );
        this.fetchRelatedProducts()
    }

}
