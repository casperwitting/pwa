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
import {PersonService} from "./person/person.service";
import { PersonFormComponent } from './person/person-form/person-form.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ShoppingCartWidgetComponent } from './product/shopping-cart-widget/shopping-cart-widget.component';
import { ProductService } from './product/product.service';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';


const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'people', component: PersonListComponent},
  { path: 'person/add', component: PersonFormComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'cart', component: ShoppingCartListComponent }
];

@NgModule({
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService, ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
