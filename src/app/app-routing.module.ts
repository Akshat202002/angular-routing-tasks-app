import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Task4Component } from './task4/task4.component';
import { Component1Component } from './task4/components/component1/component1.component';
import { Component2Component } from './task4/components/component2/component2.component';
import { Component3Component } from './task4/components/component3/component3.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/task1', pathMatch: 'full'
  },
  {
    path: 'task1', component: Task1Component
  },
  {
    path: 'task2', component:Task2Component
  },
  {
    path: 'task3', component:Task3Component
  },
  {
    path: 'task4', component:Task4Component, children: [

      {
        path: 'component1', component: Component1Component
      },
      {
        path: 'component2', component: Component2Component
      },
      {
        path: 'component3', component: Component3Component
      }
    ]
  },

  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Task1Component, Task2Component, Task3Component, PageNotFoundComponent];
