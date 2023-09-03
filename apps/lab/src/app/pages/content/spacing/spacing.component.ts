import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spacing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacingComponent {}
