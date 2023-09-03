import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../../shared/layout/sub-header/sub-header.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-with-virtual-scrolling',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, ScrollingModule],
  templateUrl: './with-virtual-scrolling.component.html',
  styleUrls: ['./with-virtual-scrolling.component.css'],
})
export class WithVirtualScrollingComponent {
  items = Array.from({ length: 100 }).map((value, i) => `Item #${i}`);
}
