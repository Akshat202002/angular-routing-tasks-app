import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task5ai',
  templateUrl: './task5ai.component.html',
  styleUrls: ['./task5ai.component.css']
})
export class Task5aiComponent implements OnInit {
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
