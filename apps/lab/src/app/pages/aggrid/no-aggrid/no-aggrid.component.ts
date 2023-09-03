import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no-aggrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-aggrid.component.html',
  styleUrls: ['./no-aggrid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoAggridComponent {}
