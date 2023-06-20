import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  value = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.value$.subscribe(value => {
      this.value = value;
    });
  }

  updateValue(): void {
    this.dataService.updateValue(this.value);
  }
}
