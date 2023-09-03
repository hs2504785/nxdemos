import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../layout/base-layout/sub-header/sub-header.component';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorComponent {}
