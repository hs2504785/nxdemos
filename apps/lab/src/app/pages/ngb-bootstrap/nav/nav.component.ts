import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, NgbNavModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  active = 1;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    console.log('change', changeEvent);
    // if (changeEvent.nextId === 3) {
    //   changeEvent.preventDefault();
    // }
  }
}
