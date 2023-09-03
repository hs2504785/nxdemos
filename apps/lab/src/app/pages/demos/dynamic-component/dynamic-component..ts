import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, RouterModule],
  templateUrl: './dynamic-component.html',
  styleUrls: ['./dynamic-component.css'],
})
export class DynamicComponent {}
