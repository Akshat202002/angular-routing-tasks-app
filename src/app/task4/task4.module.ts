import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4Component } from './task4.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Task4Component,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    CommonModule,
    Task4RoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class Task4Module { }
