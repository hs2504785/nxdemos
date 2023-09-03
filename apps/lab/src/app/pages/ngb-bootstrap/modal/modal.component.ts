import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DemoModalComponent } from './demo-modal/demo-modal.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
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

  openComponent() {
    const modalRef = this.modalService.open(DemoModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  openModalWithOption() {
    const modalRef = this.modalService.open(DemoModalComponent, {
      modalDialogClass: 'hem-modal',
      scrollable: true,
      centered: true,
      size: 'xl', // sm, lg, xl, fullscreen
      windowClass: 'modal-ngb-wrapper-window',
      backdropClass: 'light-blue-backdrop',
    });
  }

  openDeleteModal(content: any) {
    this.modalService
      .open(content, {
        modalDialogClass: '',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
  }
}
