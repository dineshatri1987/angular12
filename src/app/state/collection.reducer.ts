import { createReducer, on, Action } from '@ngrx/store';
import { addEmployee, removeEmployee } from './employee.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeEmployee, (state, { employeeId }) => state.filter(id => id !== employeeId)),
  on(addEmployee, (state, { employeeId }) => {
    if (state.indexOf(employeeId) > -1) return state;

    return [...state, employeeId];
  })
);
