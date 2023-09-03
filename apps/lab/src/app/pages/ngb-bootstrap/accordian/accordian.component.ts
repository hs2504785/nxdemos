import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, NgbAccordionModule],
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordianComponent {}
