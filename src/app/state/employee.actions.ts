import { createAction, props } from '@ngrx/store';

export const addEmployee = createAction(
  '[Employee List] Add Employee',
  props<{ employeeId: any }>()
);

export const removeEmployee = createAction(
  '[Employee Collection] Remove Employee',
  props<{ employeeId: any }>()
);

export const retrievedEmployeeList = createAction(
  '[Employee List/API] Retrieve Employee Success',
  props<{ Employee: any }>()
);
