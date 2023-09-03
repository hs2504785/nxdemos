import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent {
  isOpen = false;
  toggleDiv(e: Event) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
