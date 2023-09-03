import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from '../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-ngb-bootstrap',
  standalone: true,
  imports: [CommonModule, RouterModule, SubHeaderComponent],
  templateUrl: './ngb-bootstrap.component.html',
  styleUrls: ['./ngb-bootstrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgbBootstrapComponent {}
