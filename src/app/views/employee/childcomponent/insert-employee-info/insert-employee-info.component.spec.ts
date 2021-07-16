import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmployeeInfoComponent } from './insert-employee-info.component';

describe('InsertEmployeeInfoComponent', () => {
  let component: InsertEmployeeInfoComponent;
  let fixture: ComponentFixture<InsertEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmployeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
