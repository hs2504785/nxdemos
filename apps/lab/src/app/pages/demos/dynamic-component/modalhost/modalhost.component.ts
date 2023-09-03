import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../shared/layout/sub-header/sub-header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalhost',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './modalhost.component.html',
  styleUrls: ['./modalhost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalhostComponent {
  constructor(private modalService: NgbModal) {}

  async openComponent() {
    const { DemoComponent } = await import('../components/demo/demo.component');

    const modalRef = this.modalService.open(DemoComponent);
    modalRef.componentInstance.message = 'Kore World';

    modalRef.closed.subscribe((res) => {
      console.log('RES', res);
    });
  }
}
