import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabHeaderComponent } from './lab-header/lab-header.component';
import { LabSidebarComponent } from './lab-sidebar/lab-sidebar.component';
import { LabMainComponent } from './lab-main/lab-main.component';
import { LabFooterComponent } from './lab-footer/lab-footer.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    CommonModule,
    LabHeaderComponent,
    LabSidebarComponent,
    LabMainComponent,
    LabFooterComponent,
    RouterOutlet,
  ],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {}
