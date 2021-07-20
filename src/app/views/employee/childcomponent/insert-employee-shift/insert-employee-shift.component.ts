import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee, EmployeeShift } from 'src/app/models/employee';
import { SharedService } from 'src/app/services/SharedService';
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
  formShift = this.fb.group({});
  submitted = false;
  employee: Employee = {} as Employee;
  @ViewChild('contentShift', { static: false }) content: ElementRef | undefined;
  subs: Subscription;
  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>, private sharedService:SharedService, private fb: FormBuilder) {
    this.subs = sharedService.OpenShift$.subscribe((emp)=>{ 
      this.open(emp); 
    });
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formShift.controls;
  }

  daysChange(i: number, j: number) {
    this.employee.shift[i].days[j] = !this.employee.shift[i].days[j];
  }

  openSkill(){
    this.modalService.dismissAll();
    this.sharedService.OpenSkill$.emit(this.employee)
  }

  addShift(){
    const shift = new EmployeeShift();
    shift.designation = "shift" + this.employee.shift.length;
    this.employee.shift.push(shift);
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
    if(this.employee.shift.length == 0){
      const shift = new EmployeeShift();
      shift.designation = "Supervisor";
      this.employee.shift.push(shift);
    }
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
