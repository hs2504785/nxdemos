import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankComponent {}
