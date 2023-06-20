import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task5a',
  templateUrl: './task5a.component.html',
  styleUrls: ['./task5a.component.css']
})
export class Task5aComponent implements OnInit {
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
