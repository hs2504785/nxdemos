import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-main.component.html',
  styleUrls: ['./lab-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabMainComponent {}
