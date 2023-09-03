import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-header.component.html',
  styleUrls: ['./lab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabHeaderComponent {}
