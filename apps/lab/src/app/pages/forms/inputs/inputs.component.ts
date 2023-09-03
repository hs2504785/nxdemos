import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputsComponent {
  searchVal = '';

  onChangeEvent(event: any) {
    this.searchVal = event.target?.value;
  }

  cancelSearch() {
    this.searchVal = '';
  }
}
