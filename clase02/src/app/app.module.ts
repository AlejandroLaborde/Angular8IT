import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrivenComponent } from './components/driven/driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { PruebaCOSASComponent } from './components/prueba-cosas/prueba-cosas.component';


@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    ReactiveComponent,
    PruebaCOSASComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
