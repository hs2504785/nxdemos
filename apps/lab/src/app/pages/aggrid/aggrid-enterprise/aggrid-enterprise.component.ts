import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridService } from '@gale/services/src';
import { HelperService } from '@gale/ui/src';

@Component({
  selector: 'app-aggrid-enterprise',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './aggrid-enterprise.component.html',
  styleUrls: ['./aggrid-enterprise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggridEnterpriseComponent {
  helperService = inject(HelperService);
  aggridService = inject(AgGridService);

  public columnDefs: ColDef[] = [
    { field: 'athlete', rowGroup: true },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
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
    // enableRowGroup: true,
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
