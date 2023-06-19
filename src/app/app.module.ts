import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Task3Component } from './task3/task3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Task4Module } from './task4/task4.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Task3Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Task4Module

  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
