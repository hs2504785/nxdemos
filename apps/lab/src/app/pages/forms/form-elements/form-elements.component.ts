import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormElementsComponent {}
