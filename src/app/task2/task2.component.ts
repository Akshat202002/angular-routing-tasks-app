import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  dateTimeString: string;

  constructor() {
    this.dateTimeString = '';
  }

  test(): void {
    console.log(this.dateTimeString);
  }
}
