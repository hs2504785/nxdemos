import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-button-groups',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupsComponent {}
