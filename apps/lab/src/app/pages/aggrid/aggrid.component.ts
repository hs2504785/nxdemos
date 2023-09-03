import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from '../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-aggrid',
  standalone: true,
  imports: [CommonModule, RouterModule, SubHeaderComponent],
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggridComponent {}
