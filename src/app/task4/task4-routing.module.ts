import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task4Component } from './task4.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';

const routes: Routes = [
  {path: '', component: Task4Component, children:
  [
    {path: 'component1', component: Component1Component},
    {path: 'component2', component: Component2Component},
    {path: 'component3', component: Component3Component}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task4RoutingModule { }
