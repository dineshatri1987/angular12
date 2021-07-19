import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Employee, EmployeeShift } from 'src/app/models/employee';
import { AppState } from 'src/app/state/app.state';
import { addEmployee } from 'src/app/state/employee.actions';
import { InsertEmployeeSkillComponent } from '../insert-employee-skill/insert-employee-skill.component';

@Component({
  selector: 'app-insert-employee-shift',
  templateUrl: './insert-employee-shift.component.html',
  styleUrls: ['./insert-employee-shift.component.scss']
})
export class InsertEmployeeShiftComponent implements OnInit {
  closeResult = '';
  employee: Employee = {} as Employee;
  @ViewChild('contentShift', { static: false }) content: ElementRef | undefined;
  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  daysChange(i: number, j: number) {
    this.employee.shift[i].days[j] = !this.employee.shift[i].days[j];
  }

  addShift(){
    this.employee.shift.push(new EmployeeShift());
  }

  DeleteShift(index: number){
    this.employee.shift.splice(index, 1);
  }

  save(){
    this.store.dispatch(addEmployee(this.employee));
    this.modalService.dismissAll();
  }

  open(employee1: Employee) {
    this.employee = Object.assign({},employee1);
    this.employee.shift = []; 
    this.employee.shift.push(new EmployeeShift());
    this.modalService.open(this.content,
      { ariaLabelledBy: 'modal-basic-title',windowClass: 'employee-shift-modal' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
