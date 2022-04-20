import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
// import { FormModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
