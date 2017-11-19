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
import { PersonFormComponent } from './person/person-form/person-form.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ShoppingCartWidgetComponent } from './product/shopping-cart-widget/shopping-cart-widget.component';
import { ProductService } from './product/product.service';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { PushNotificationsModule } from 'ng-push';
import { GlobalService } from './global.service';
import { CookieService } from 'ngx-cookie-service';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SearchComponent } from './header/search/search.component';

const appRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'search', component: SearchComponent },
    { path: 'people', component: PersonListComponent },
    { path: 'person/add', component: PersonFormComponent },
    { path: 'person/:id', component: PersonDetailComponent },
    { path: 'cart', component: ShoppingCartListComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'category/:categoryName', component: ProductListComponent }
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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot( appRoutes ),
        PushNotificationsModule
    ],
    providers: [ PersonService, CookieService, ProductService, GlobalService, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
    bootstrap: [ AppComponent ]

} )
export class AppModule {
}
