import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5aiComponent } from './task5ai.component';

describe('Task5aiComponent', () => {
  let component: Task5aiComponent;
  let fixture: ComponentFixture<Task5aiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task5aiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5aiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
