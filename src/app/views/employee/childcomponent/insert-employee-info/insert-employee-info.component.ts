import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee';
import { AppState } from 'src/app/state/app.state';
import { InsertEmployeeDetailComponent } from '../insert-employee-detail/insert-employee-detail.component';
import { InsertEmployeeSkillComponent } from '../insert-employee-skill/insert-employee-skill.component';

@Component({
  selector: 'app-insert-employee-info',
  templateUrl: './insert-employee-info.component.html',
  styleUrls: ['./insert-employee-info.component.scss']
})
export class InsertEmployeeInfoComponent implements OnInit {
  closeResult = '';
  employee: Employee = {} as Employee;
  @ViewChild('contentInfo', { static: false }) content: ElementRef | undefined;
  @ViewChild(InsertEmployeeSkillComponent ) skill: InsertEmployeeSkillComponent | undefined ; 

  constructor(private modalService: NgbModal, private ref: ElementRef, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    
  }

  openShift() {
    this.modalService.dismissAll();
    this.skill?.open(this.employee);
  }

  openDetail(){
    this.modalService.dismissAll();
    //this.detail?.open(this.employee);
  }

  open(employee1: Employee) {
    this.employee = Object.assign({},employee1);
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
