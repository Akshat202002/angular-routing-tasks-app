import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private valueSubject = new Subject<string>();
  value$ = this.valueSubject.asObservable();

  updateValue(value: string): void {
    this.valueSubject.next(value);
  }
}
