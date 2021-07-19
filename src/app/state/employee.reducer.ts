import { createReducer, on, Action } from '@ngrx/store';

import { retrievedEmployeeList } from './employee.actions';
import { Employee } from '../models/employee';

export const initialState: ReadonlyArray<Employee> = [];

export const employeesReducer = createReducer(
  initialState,
  on(retrievedEmployeeList, (state, { Employee }) => [...Employee])
);
