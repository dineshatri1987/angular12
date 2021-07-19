import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { AppState } from 'src/app/state/app.state';
import { selectEmployees } from 'src/app/state/employee.selectors';

@Component({
  selector: 'app-employee',
  templateUrl: '/employee.component.html',
  styleUrls: ['/employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee = {} as Employee;
  employees: Employee[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectEmployees)).subscribe(
      (res) => {
        this.employees = res;
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
  }

}
