import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ngapps/shared/components';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {}
