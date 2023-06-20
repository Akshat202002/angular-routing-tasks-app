import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5aComponent } from './task5a.component';

describe('Task5aComponent', () => {
  let component: Task5aComponent;
  let fixture: ComponentFixture<Task5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task5aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
