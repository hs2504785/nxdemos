import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiguresComponent {}
