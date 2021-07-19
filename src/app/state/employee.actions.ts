import { createAction } from '@ngrx/store';
import { Employee } from '../models/employee';

export const addEmployee = createAction(
  '[Employee List] Add Employee',
  (employee: Employee) => ({ employee })
);

export const updateEmployee = createAction(
  '[Employee List] update Employee',
  (employee: Employee) => ({ employee })
);

export const removeEmployee = createAction(
  '[Employee Collection] Remove Employee',
  (employee: Employee) => ({ employee })
);

export const setEmployeeId = createAction(
  'Set Employee Id',
  (employeeId: string) => ({ employeeId })
);
