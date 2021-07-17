import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insert-employee-shift',
  templateUrl: './insert-employee-shift.component.html',
  styleUrls: ['./insert-employee-shift.component.scss']
})
export class InsertEmployeeShiftComponent implements OnInit {
  closeResult = '';
  @ViewChild('contentShift', { static: false }) content: ElementRef | undefined;
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
