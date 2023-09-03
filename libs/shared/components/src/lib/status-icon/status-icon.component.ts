import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-status-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusIconComponent {
  @Input() iconUrl: string | boolean = '';
  @Input() iconClass: any;
  @Input() size = 'lg'; // sm, md, lg, xl, xxl
  @Input() status = 'secondary'; // primary, secondary, success, warning, danger

  @HostBinding('style.box-shadow') get boxShadow() {
    let borderSize = '10px';
    let borderColor = 'secondary';
    switch (this.size) {
      case 'sm':
        borderSize = '2px';
        break;

      case 'md':
        borderSize = '4px';
        break;

      case 'lg':
        borderSize = '6px';
        break;

      case 'xl':
        borderSize = '8px';
        break;

      case 'xxl':
        borderSize = '10px';
        break;
    }

    switch (this.status) {
      case 'primary':
        borderColor = '#EFF4FF';
        break;

      case 'secondary':
        borderColor = '#F9FAFB';
        break;

      case 'success':
        borderColor = '#ECFDF3';

        break;

      case 'warning':
        borderColor = '#FFFAEB';
        break;

      case 'danger':
        borderColor = '#FEF3F2';
        break;
    }

    return `0 0 0 ${borderSize} ${borderColor}`;
  }

  @HostBinding('class')
  get hostClasses() {
    return `${this.size} ${this.status}`;
  }
}
