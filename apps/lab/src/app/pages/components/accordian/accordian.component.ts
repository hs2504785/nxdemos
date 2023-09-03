import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordianComponent {}
