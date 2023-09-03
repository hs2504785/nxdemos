import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-without-virtual-scrolling',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './without-virtual-scrolling.component.html',
  styleUrls: ['./without-virtual-scrolling.component.css'],
})
export class WithoutVirtualScrollingComponent {
  items = Array.from({ length: 100 }).map((value, i) => `Item #${i}`);
}
