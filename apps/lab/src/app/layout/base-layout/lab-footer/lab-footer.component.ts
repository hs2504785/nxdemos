import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-footer.component.html',
  styleUrls: ['./lab-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabFooterComponent {}
