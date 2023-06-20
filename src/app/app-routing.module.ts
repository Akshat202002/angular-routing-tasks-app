import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Task5Component } from './task5/task5.component';
import { Task5aComponent } from './task5/task5a/task5a.component';
import { Task5aiComponent } from './task5/task5a/task5ai/task5ai.component';
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
    path: 'task4',
    loadChildren: () => import('./task4/task4.module').then((m)=>m.Task4Module)
  },
  // {
  //   path: 'task4', component:Task4Component, children: [

  //     {
  //       path: 'component1', component: Component1Component
  //     },
  //     {
  //       path: 'component2', component: Component2Component
  //     },
  //     {
  //       path: 'component3', component: Component3Component
  //     }
  //   ]
  // },
  {
    path: 'task5', component: Task5Component, children: [
      {
        path: 'task5a', component: Task5aComponent, children: [
          {
            path: 'task5ai', component: Task5aiComponent
          }
        ]
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
export const routingComponents = [Task1Component, Task2Component, Task3Component, Task5Component, Task5aComponent, Task5aiComponent, PageNotFoundComponent];
