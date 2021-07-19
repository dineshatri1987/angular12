import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { InsertEmployeeDetailComponent } from 'src/app/views/employee/childcomponent/insert-employee-detail/insert-employee-detail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(InsertEmployeeDetailComponent ) detail: InsertEmployeeDetailComponent | undefined ; 
  employeeId: string = '';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

  }

  openDetail() {
    this.detail?.open(undefined);
  }
}
