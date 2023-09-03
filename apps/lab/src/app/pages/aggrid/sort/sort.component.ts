import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';
import { HelperService } from '@gale/ui/src';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent {
  helperService = inject(HelperService);

  columnDefs: ColDef[] = [
    { field: 'make', sortable: true },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  constructor() {
    this.helperService.loadStyle('aggrid.min.css');
  }
}
