import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-offcanvas.component.html',
  styleUrls: ['./demo-offcanvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoOffcanvasComponent {
  @Input() name = '';
}
