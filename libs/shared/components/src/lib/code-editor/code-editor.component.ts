import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HelperService } from '../services/helper.service';
import { CopyService } from '../services/copy.service';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { codeEditorDefaultOptions } from './code-editor.constant';

@Component({
  selector: 'ui-code-editor',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule, MonacoEditorModule, FormsModule],
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorComponent implements OnInit {
  private dialogService = inject(NgbModal);
  private helperService = inject(HelperService);
  private copyService = inject(CopyService);
  @Input() data: any = '{}';
  @Input() options: any;
  @Output() dataChanged = new EventEmitter();

  lightDarkModeTooltip = '';

  editorOptions = {
    theme: 'vs-light',
    language: 'javascript',
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false,
    },
    scrollbar: {
      useShadows: true,
      verticalHasArrows: false,
      horizontalHasArrows: false,
      vertical: 'visible',
      verticalScrollbarSize: 12,
      horizontalScrollbarSize: 12,
      arrowSize: 30,
    },
    automaticLayout: true,
  };

  isDarkTheme = false;
  codeEditorOptions = codeEditorDefaultOptions;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.configureCodeEditor();
  }

  configureCodeEditor(): void {
    this.helperService.loadStyle('code-editor.min.css');

    this.codeEditorOptions = {
      ...this.codeEditorOptions,
      ...this.options,
    };
    // setTimeout(() => {
    //   this.compRef.codeMirror.refresh();
    //   this.cd.detectChanges();
    // }, 500);
  }

  onDataChanged(value: any) {
    this.dataChanged.emit(value);
  }

  //enable or disbale Dark mode for Code-mirror
  // enableDarkMode() {
  //   this.isDarkTheme = !this.isDarkTheme;
  //   this.lightDarkModeTooltip = this.isDarkTheme ? 'Light Mode' : 'Dark Mode';
  //   this.setCodemirrorStyles();
  // }

  //copy snippet JSON
  copyToClipboard(event: MouseEvent) {
    event.stopPropagation();
    this.copyService.copyToClipboard(this.data);
  }
}
