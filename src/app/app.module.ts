import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from "@angular/forms";
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonItemComponent } from './person/person-list/person-item/person-item.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PersonService } from "./person/person.service";
import { OrderService } from "./order/order.service";
import { PersonFormComponent } from './person/person-form/person-form.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ShoppingCartWidgetComponent } from './product/shopping-cart-widget/shopping-cart-widget.component';
import { ProductService } from './product/product.service';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { PushNotificationsModule } from 'ng-push';
import { GlobalService } from './global.service';
import { MessagingService } from './messaging.service';
import { CookieService } from 'ngx-cookie-service';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SearchComponent } from './header/search/search.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

import { AngularFireModule} from 'angularfire2';
// import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment} from '../environments/environment';
import { OrderDetailsFormComponent } from './order/order-details-form/order-details-form.component';
import { PaymentDetailsFormComponent } from './order/payment-details-form/payment-details-form.component';
import { PaymentSuccessComponent } from './order/payment-success/payment-success.component';

const appRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'search', component: SearchComponent },
    { path: 'people', component: PersonListComponent },
    { path: 'person/add', component: PersonFormComponent },
    { path: 'person/:id', component: PersonDetailComponent },
    { path: 'cart', component: ShoppingCartListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'category/:categoryName', component: ProductListComponent },
    { path: 'order', component: OrderDetailsFormComponent },
    { path: 'payment', component: PaymentDetailsFormComponent },
    { path: 'payment/success', component: PaymentSuccessComponent },

];

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        'swipe': { velocity: 0.4, threshold: 20 } // override default settings
    }
}

@NgModule( {
    declarations: [
        AppComponent,
        AlertComponent,
        PersonListComponent,
        PersonItemComponent,
        HeaderComponent,
        PersonDetailComponent,
        HomeComponent,
        PersonFormComponent,
        ProductListComponent,
        ShoppingCartWidgetComponent,
        ShoppingCartListComponent,
        CategoryListComponent,
        SearchComponent,
        ProductDetailComponent,
        OrderDetailsFormComponent,
        PaymentDetailsFormComponent,
        PaymentSuccessComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot( appRoutes ),
        PushNotificationsModule,
        // AngularFireDatabase,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
    ],
    providers: [ PersonService, OrderService, CookieService, ProductService, MessagingService, GlobalService, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
    bootstrap: [ AppComponent ]

} )
export class AppModule {
}
