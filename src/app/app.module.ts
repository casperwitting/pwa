import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from "@angular/forms";
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
      AlertComponent,
      PersonListComponent,
      PersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
