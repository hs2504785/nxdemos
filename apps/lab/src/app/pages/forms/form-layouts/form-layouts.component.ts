import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-form-layouts',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutsComponent {}
