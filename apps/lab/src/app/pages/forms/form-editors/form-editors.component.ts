import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, HelperService } from '@gale/ui/src';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillModule,
} from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-editors',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, QuillModule, FormsModule],
  templateUrl: './form-editors.component.html',
  styleUrls: ['./form-editors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEditorsComponent {
  private helperService = inject(HelperService);
  html = `<p>Hello World!</p>
  <p>This is Quill <strong>default</strong> editor</p>`;

  constructor() {
    this.helperService.loadStyle('quill.min.css');
  }

  created(event: any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
  }
}
