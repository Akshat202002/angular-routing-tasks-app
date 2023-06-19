import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `
    <h2>JSON Rendering</h2>
    <p> Without Render </p>
    <pre>{{ jsonData }}</pre>
    <h3>Input JSON:</h3>
    <textarea [(ngModel)]="jsonData" placeholder="Enter JSON data"></textarea>

    <h3>Rendered JSON:</h3>
    <pre>{{ jsonData | json }}</pre>


  `,
  styles: []
})
export class Task3Component {
  jsonData: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
