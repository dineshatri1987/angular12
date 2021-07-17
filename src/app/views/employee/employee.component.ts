import { Component, OnInit, ViewChild } from '@angular/core';
import { InsertEmployeeDetailComponent } from './childcomponent/insert-employee-detail/insert-employee-detail.component';
import { InsertEmployeeInfoComponent } from './childcomponent/insert-employee-info/insert-employee-info.component';
import { InsertEmployeeShiftComponent } from './childcomponent/insert-employee-shift/insert-employee-shift.component';
import { InsertEmployeeSkillComponent } from './childcomponent/insert-employee-skill/insert-employee-skill.component';

@Component({
  selector: 'app-employee',
  templateUrl: '/employee.component.html',
  styleUrls: ['/employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(InsertEmployeeDetailComponent ) detail: InsertEmployeeDetailComponent | undefined ; 
  @ViewChild(InsertEmployeeInfoComponent ) info: InsertEmployeeInfoComponent | undefined ; 
  @ViewChild(InsertEmployeeShiftComponent ) shift: InsertEmployeeShiftComponent | undefined ; 
  @ViewChild(InsertEmployeeSkillComponent ) skill: InsertEmployeeSkillComponent | undefined ; 
  constructor() { }

  ngOnInit(): void {
  }

  openDetail() {
    this.detail?.open();
  }

  openInfo() {
    this.info?.open();
  }

  openShift() {
    this.shift?.open();
  }

  openSkill() {
    this.skill?.open();
  }

}
