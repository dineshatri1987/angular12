import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmployeeShiftComponent } from './insert-employee-shift.component';

describe('InsertEmployeeShiftComponent', () => {
  let component: InsertEmployeeShiftComponent;
  let fixture: ComponentFixture<InsertEmployeeShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmployeeShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmployeeShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
