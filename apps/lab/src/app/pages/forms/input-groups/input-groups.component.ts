import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-input-groups',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputGroupsComponent {}
