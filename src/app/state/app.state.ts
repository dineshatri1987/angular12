import { Employee } from '../models/employee';

export interface AppState {
  employees: Employee[];
  employeeId: string;
}
