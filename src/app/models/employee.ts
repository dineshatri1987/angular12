export interface Employee {
    id: string;
    employeeCode: string;
    employeeName: string;
    displayName: string;
    description: string;
    port: string;
    workSite: string;
    workLocation: string;
  }

export class EmployeeShift {
    designation: string = '';
    shiftInTime: string = '';
    shiftOutTimne: string = '';
    mealInTime: string = '';
    mealOutTimne: string = '';
    days: number[] | undefined;
    staggerRdo: string = '';
}

