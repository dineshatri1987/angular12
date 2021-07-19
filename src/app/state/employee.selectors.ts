import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Employee } from '../models/employee';

export const selectEmployees = createSelector<AppState, Employee[], Employee[]>(
  (state: AppState) => state.employees,
  (employees: Employee[]) => employees
);

export const selectCollectionState = createFeatureSelector<
  AppState,
  Array<string>
>('collection');

export const selectBookCollection = createSelector(
  selectEmployees,
  selectCollectionState,
  (employees: Array<Employee>, collection: Array<string>) => {
    return collection.map(id => employees.find(x => x.id === id));
  }
);
