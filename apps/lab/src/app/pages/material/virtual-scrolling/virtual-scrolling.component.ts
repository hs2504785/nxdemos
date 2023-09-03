import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-virtual-scrolling',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, RouterModule],
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollingComponent {}
