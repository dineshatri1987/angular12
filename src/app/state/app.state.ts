import { Employee } from '../models/employee';

export interface AppState {
  employees: Array<Employee>;
  collection: Array<string>;
}
