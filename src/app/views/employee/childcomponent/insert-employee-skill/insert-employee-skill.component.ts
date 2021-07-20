import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { SharedService } from 'src/app/services/SharedService';
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
  formSkill = this.fb.group({});
  submitted = false;
  employee: Employee = {} as Employee;
  newSkill: string = '';
  @ViewChild('contentSkill', { static: false }) content: ElementRef | undefined;
  @ViewChild(InsertEmployeeShiftComponent ) shift: InsertEmployeeShiftComponent | undefined ; 
  subs: Subscription;
  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>,  private sharedService:SharedService, private fb: FormBuilder) {
    this.subs = sharedService.OpenSkill$.subscribe((emp)=>{ 
      this.open(emp); 
    });
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formSkill.controls;
  }

  initializeInfoForm() {
    this.formSkill = this.fb.group({
      skills: [this.employee.skills, [Validators.required]],
      additionalSkill: [this.employee.additionalSkill, [Validators.required]],
      newSkill: ['', []]
    });
  }

  openShift() {
    this.submitted = true;
    if (this.formSkill.invalid) {
      return;
    }
    this.employee = { ...this.employee, ...this.formSkill.value };
    this.modalService.dismissAll();
    this.shift?.open(this.employee);
  }

  openInfo(){
    this.employee = { ...this.employee, ...this.formSkill.value };
    this.modalService.dismissAll();
    this.sharedService.OpenInfo$.emit(this.employee)
  }

  addSkill(){
    this.employee.skills.push(this.formSkill.value.newSkill);
    this.formSkill.patchValue({
      skills: this.employee.skills, 
      newSkill: ''
    });
  }

  open(employee1: Employee) {
    this.employee = Object.assign({},employee1);
    this.initializeInfoForm();
    this.modalService.open(this.content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.submitted = false;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.submitted = false;
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
