import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  private cd = inject(ChangeDetectorRef);
  @Input() control!: any;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() required!: boolean;
  @Input() help!: string;
  @Input() placeholder!: string;
  @Input() errorMessage!: string;
  @Input() options!: { name: string; value: any }[];
  @Input() defaultOptionText = 'Select an option';

  showError = false;

  ngOnInit() {
    this.control?.valueChanges.subscribe(() => {
      const isInvalid = this.getErrorMessage();

      if (isInvalid) {
        this.showError = true;
      } else {
        this.showError = false;
      }

      // this.cd.detectChanges();
    });
  }

  private getErrorMessage(): string {
    if (this.isControlInvalidAndDirty()) {
      // if (this.control.errors?.['required']) {
      if (this.errorMessage) {
        return this.errorMessage;
      }

      const fieldName = this.label || this.controlName;
      return `${fieldName} is required.`;
      // }
    }
    return '';
  }

  isControlInvalidAndDirty(): boolean {
    return !!this.control && this.control.invalid && this.control.dirty;
  }
}
