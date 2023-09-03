import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyService } from '../../services/copy.service';
import { CodeEditorComponent } from '../../code-editor/code-editor.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-code-editor-dialog',
  standalone: true,
  imports: [CommonModule, CodeEditorComponent],
  templateUrl: './code-editor-dialog.component.html',
  styleUrls: ['./code-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorDialogComponent {
  private cd = inject(ChangeDetectorRef);
  private copyService = inject(CopyService);
  activeModal = inject(NgbActiveModal);
  userCode = '';

  @Input() content: any;
  copyTimeout: any;
  isCopied = false;

  onCopyClick() {
    this.isCopied = true;
    this.copyService.copyToClipboard('data');

    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }

    this.copyTimeout = setTimeout(() => {
      this.isCopied = false;
      this.cd.detectChanges();
    }, 1000);
  }

  onDataChanged(value: any) {
    this.userCode = value;
  }
}
