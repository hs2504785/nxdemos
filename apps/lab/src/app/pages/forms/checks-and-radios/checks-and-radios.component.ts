import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-checks-and-radios',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './checks-and-radios.component.html',
  styleUrls: ['./checks-and-radios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecksAndRadiosComponent {}
