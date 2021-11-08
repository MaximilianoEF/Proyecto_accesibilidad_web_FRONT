import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { Parte4Component } from './components/parte4/parte4.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Parte4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
