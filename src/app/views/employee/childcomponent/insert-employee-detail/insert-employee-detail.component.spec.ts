import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmployeeDetailComponent } from './insert-employee-detail.component';

describe('InsertEmployeeDetailComponent', () => {
  let component: InsertEmployeeDetailComponent;
  let fixture: ComponentFixture<InsertEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmployeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
