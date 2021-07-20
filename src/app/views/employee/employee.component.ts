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
  isAscendingSort: boolean = true;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectEmployees)).subscribe(
      (res) => {
        let arr: Employee[] = [];
        arr = arr.concat(res);
        this.employees = this.sortByKey(arr, this.isAscendingSort)
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
  }

  sortData(){
    this.isAscendingSort = !this.isAscendingSort;
    let arr: Employee[] = [];
    arr = arr.concat(this.employees);
    this.employees = this.sortByKey(arr, this.isAscendingSort)
  }

  sortByKey(array: Employee[], isAcending: boolean) {
    if (this.isAscendingSort) {
      return array.sort((a, b) => a.workLocation < b.workLocation ? -1 : 1);
    } else {
      return array.sort((a, b) => a.workLocation < b.workLocation ? 1 : -1);
    }
  }

}
