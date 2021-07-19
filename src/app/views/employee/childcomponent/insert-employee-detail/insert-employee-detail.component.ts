import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
import { InsertEmployeeInfoComponent } from '../insert-employee-info/insert-employee-info.component';
import { Employee } from 'src/app/models/employee';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addEmployee } from 'src/app/state/employee.actions';
@Component({
  selector: 'app-insert-employee-detail',
  templateUrl: './insert-employee-detail.component.html',
  styleUrls: ['./insert-employee-detail.component.scss']
})
export class InsertEmployeeDetailComponent implements OnInit {
  closeResult = '';
  employee: Employee = new Employee();
  @ViewChild('contentDetail', { static: false }) content: ElementRef | undefined;
  @ViewChild(InsertEmployeeInfoComponent ) info: InsertEmployeeInfoComponent | undefined ; 

  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>) {
  }
  

  ngOnInit(): void {

  }

  openInfo() {
    debugger
    this.employee.id = this.newGuid();
    this.modalService.dismissAll();
    this.info?.open(this.employee);
  }

  open(employee1: Employee|undefined) {
    this.employee = new Employee();
    if(employee1){
      this.employee = Object.assign({},employee1);
    }
    this.modalService.open(this.content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
    });
  }

}
