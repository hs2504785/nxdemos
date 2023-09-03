import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@gale/ui/src';

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {}
