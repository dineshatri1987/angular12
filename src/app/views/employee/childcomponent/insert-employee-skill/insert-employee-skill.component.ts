import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee';
import { AppState } from 'src/app/state/app.state';
import { addEmployee } from 'src/app/state/employee.actions';
import { InsertEmployeeShiftComponent } from '../insert-employee-shift/insert-employee-shift.component';

@Component({
  selector: 'app-insert-employee-skill',
  templateUrl: './insert-employee-skill.component.html',
  styleUrls: ['./insert-employee-skill.component.scss']
})
export class InsertEmployeeSkillComponent implements OnInit {
  closeResult = '';
  employee: Employee = {} as Employee;
  newSkill: string = '';
  @ViewChild('contentSkill', { static: false }) content: ElementRef | undefined;
  @ViewChild(InsertEmployeeShiftComponent ) shift: InsertEmployeeShiftComponent | undefined ; 
  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  openShift() {
    this.modalService.dismissAll();
    this.shift?.open(this.employee);
  }

  addSkill(){
    this.employee.skills.push(this.newSkill);
    this.newSkill = '';
  }

  open(employee1: Employee) {
    debugger
    this.employee = Object.assign({},employee1);
    this.modalService.open(this.content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.store.dispatch(addEmployee(this.employee));
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.store.dispatch(addEmployee(this.employee));
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
