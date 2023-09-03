import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { DemoOffcanvasComponent } from './demo-offcanvas/demo-offcanvas.component';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffcanvasComponent {
  closeResult = '';

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openComponentOffcanvas() {
    const offcanvasRef = this.offcanvasService.open(DemoOffcanvasComponent);
    offcanvasRef.componentInstance.name = 'World';
  }

  openComponentOffcanvasOptions() {
    const offcanvasRef = this.offcanvasService.open(DemoOffcanvasComponent, {
      position: 'end', //  "end", 'top', 'bottom'
      // backdrop: 'static', // false, "static"
      // animation: false,
      // backdropClass: 'bg-info',
      panelClass: 'bg-success text-white',
    });

    offcanvasRef.componentInstance.name = 'Offcanvas Options';
  }
}
