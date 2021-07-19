import { Action, createReducer, on } from '@ngrx/store';

import { addEmployee, setEmployeeId } from './employee.actions';
import { AppState } from './app.state';

export const employeeFeatureKey = 'employee';

export const initialState: AppState = {
  employees: [],
  employeeId: ''
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee,
    (state: AppState, { employee }) => {
      if (state.employees.filter(x=>x.id == employee.id).length > 0) return state;

      return{
          ...state,
          employees: [...state.employees, employee]
        };
    })
);

export const employeeIdReducer = createReducer(
  initialState,
  on(setEmployeeId,
    (state: AppState, { employeeId }) =>
    ({
      ...state,
      employeeId: employeeId
    }))
);

export function reducers(state: AppState | undefined, action: Action): any {
  return employeeReducer(state, action);
}

export function employeeIdReducers(state: AppState | undefined, action: Action): any {
  return employeeIdReducer(state, action);
}
