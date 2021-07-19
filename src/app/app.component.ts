import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectBookCollection, selectEmployees } from './state/employee.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // employees$ = this.store.pipe(select(selectEmployees));
  // employeeCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(private store: Store) {}

  ngOnInit() {
  }

}


