import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-skelton',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './skelton.component.html',
  styleUrls: ['./skelton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeltonComponent {}
