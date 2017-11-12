import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
    selector: 'app-shopping-cart-widget',
    templateUrl: './shopping-cart-widget.component.html',
    styleUrls: ['./shopping-cart-widget.component.css']
})
export class ShoppingCartWidgetComponent implements OnInit {
    @Input() inShoppingCartCount: number;

    constructor(private productService: ProductService,
                ) {
    }

    ngOnInit() {
        this.inShoppingCartCount = this.productService.inShoppingCartCount();
    }


}
