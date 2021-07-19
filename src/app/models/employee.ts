export class Employee {
    id: string = '';
    employeeCode: string = '';
    employeeName: string = '';
    displayName: string = '';
    description: string = '';
    port: string = '';
    workSite: string = '';
    workLocation: string = '';
    shift: EmployeeShift[] = [];
    skills: string[] = [];
    additionalSkill: string = '';
    activeFromDate: string = '';
    activeThroghtDate: string = ''
  }

export class EmployeeShift {
    designation: string = 'Supervisor';
    positions: number = 0;
    shiftInTime: string = '';
    shiftOutTimne: string = '';
    mealInTime: string = '';
    mealOutTimne: string = '';
    days: boolean[] = [false,false,false,false,false,false,false];
    staggerRdo: string = '';
}

