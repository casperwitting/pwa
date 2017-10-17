import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PersonListComponent},
  { path: 'person/:id', component: PersonDetailComponent }
];

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
      AlertComponent,
      PersonListComponent,
      PersonItemComponent,
      HeaderComponent,
      PersonDetailComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]

})
export class AppModule { }
