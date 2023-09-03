import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipsComponent {}
