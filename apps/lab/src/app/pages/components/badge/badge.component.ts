import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {}
