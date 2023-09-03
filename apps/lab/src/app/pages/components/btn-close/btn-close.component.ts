import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-btn-close',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './btn-close.component.html',
  styleUrls: ['./btn-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnCloseComponent {}
