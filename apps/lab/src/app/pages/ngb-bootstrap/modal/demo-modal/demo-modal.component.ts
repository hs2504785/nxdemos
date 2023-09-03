import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalComponent {
  @Input() name = '';

  constructor(public activeModal: NgbActiveModal) {}
}
