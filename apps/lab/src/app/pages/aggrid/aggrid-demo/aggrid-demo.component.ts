import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '@gale/ui/src';

@Component({
  selector: 'app-aggrid-demo',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './aggrid-demo.component.html',
  styleUrls: ['./aggrid-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggridDemoComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  helperService = inject(HelperService);

  public rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private http: HttpClient) {
    this.helperService.loadStyle('aggrid.min.css');
  }

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json',
    );
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
