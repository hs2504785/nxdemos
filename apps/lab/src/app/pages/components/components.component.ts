import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {}
