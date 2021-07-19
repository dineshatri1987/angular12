import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
import { InsertEmployeeInfoComponent } from '../insert-employee-info/insert-employee-info.component';
import { Employee } from 'src/app/models/employee';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-insert-employee-detail',
  templateUrl: './insert-employee-detail.component.html',
  styleUrls: ['./insert-employee-detail.component.scss']
})
export class InsertEmployeeDetailComponent implements OnInit {
  closeResult = '';
  employee: Employee = {} as Employee;
  @ViewChild('contentDetail', { static: false }) content: ElementRef | undefined;
  @ViewChild(InsertEmployeeInfoComponent ) info: InsertEmployeeInfoComponent | undefined ; 

  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store) {
  }
  

  ngOnInit(): void {
  }

  openInfo() {
    debugger
    this.modalService.dismissAll();
    this.info?.open();
  }

  open() {
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

}
