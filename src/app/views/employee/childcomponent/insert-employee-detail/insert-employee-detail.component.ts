import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-insert-employee-detail',
  templateUrl: './insert-employee-detail.component.html',
  styleUrls: ['./insert-employee-detail.component.scss']
})
export class InsertEmployeeDetailComponent implements OnInit {
  closeResult = '';
  @ViewChild('contentDetail', { static: false }) content: ElementRef | undefined;
  constructor(private modalService: NgbModal, private ref: ElementRef) {}

  ngOnInit(): void {
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
