import { Component, OnInit, ViewChild } from '@angular/core';
import { InsertEmployeeDetailComponent } from 'src/app/views/employee/childcomponent/insert-employee-detail/insert-employee-detail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(InsertEmployeeDetailComponent ) detail: InsertEmployeeDetailComponent | undefined ; 
  constructor() { }

  ngOnInit(): void {
  }

  openDetail() {
    this.detail?.open();
  }
}
