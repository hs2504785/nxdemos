import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  selectedAction = 'lower';
  ruleOptions = {
    actions: [
      'boost',
      'lower',
      'hide',
      'filter',
      'Get certificate by completing entire book',
    ],
  };

  outcomeSclection(val: string) {
    this.selectedAction = val;
  }
}
