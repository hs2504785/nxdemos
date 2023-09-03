import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  @Input() title = '';
}
