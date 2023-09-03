import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridService } from '@gale/services/src';
import {
  MyCellComponent,
  MyCellParams,
} from './components/my-cell/my-cell.component';
import { UnderComponent } from './components/under.component';
import { OverComponent } from './components/over.component';
import { HelperService } from '@gale/ui/src';

@Component({
  selector: 'app-aggrid-customizing-cells',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './aggrid-customizing-cells.component.html',
  styleUrls: ['./aggrid-customizing-cells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggridCustomizingCellsComponent {
  helperService = inject(HelperService);
  aggridService = inject(AgGridService);

  public columnDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRenderer: MyCellComponent,
      cellRendererParams: {
        buttonText: 'Click Me',
      } as MyCellParams,
    },
    {
      field: 'age',
      cellRendererSelector: (params: ICellRendererParams) => {
        if (params.value < 25) {
          return { component: UnderComponent, params: {} };
        }
        return { component: OverComponent };
      },
    },
    {
      field: 'country',
      cellRenderer: MyCellComponent,
      cellRendererParams: {
        buttonText: 'Click Me 1',
      } as MyCellParams,
    },
    {
      field: 'year',
      cellRenderer: (params: ICellRendererParams) => {
        return `<b> !! ${params.value} </b>`;
      },
    },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.helperService.loadStyle('aggrid.min.css');
    this.aggridService.initializeAgGrid();
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json',
    );
  }
}
