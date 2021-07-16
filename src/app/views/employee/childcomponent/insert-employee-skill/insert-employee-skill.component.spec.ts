import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmployeeSkillComponent } from './insert-employee-skill.component';

describe('InsertEmployeeSkillComponent', () => {
  let component: InsertEmployeeSkillComponent;
  let fixture: ComponentFixture<InsertEmployeeSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEmployeeSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEmployeeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
