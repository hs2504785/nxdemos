import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-callout',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalloutComponent {}
