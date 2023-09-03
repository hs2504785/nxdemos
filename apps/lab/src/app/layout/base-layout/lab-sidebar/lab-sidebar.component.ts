import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lab-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbAccordionModule],
  templateUrl: './lab-sidebar.component.html',
  styleUrls: ['./lab-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabSidebarComponent {}
