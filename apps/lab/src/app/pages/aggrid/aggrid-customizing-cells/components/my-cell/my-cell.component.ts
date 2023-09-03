import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface MyCellParams {
  buttonText?: string;
}

@Component({
  selector: 'app-my-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-cell.component.html',
  styleUrls: ['./my-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCellComponent implements ICellRendererAngularComp {
  value: any;
  buttonText = 'Default';

  agInit(params: ICellRendererParams & MyCellParams): void {
    this.value = params.value;
    this.buttonText = params.buttonText ?? 'Default';
  }

  refresh(params: ICellRendererParams & MyCellParams): boolean {
    return false;
  }

  onClick(event: any) {
    alert('Cell value is ' + this.value);
  }
}
