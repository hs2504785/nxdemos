import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, RouterModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {}
