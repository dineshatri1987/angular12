import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Employee } from '../models/employee';
import { AppState } from './app.state';
import { employeeFeatureKey } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<AppState>(
  employeeFeatureKey,
);

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state: AppState) => state.employees
);

export const selectEmployeId = createSelector(
  selectEmployeeState,
  (state: AppState) => state.employeeId
);
