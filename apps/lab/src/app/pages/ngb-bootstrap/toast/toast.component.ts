import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from '@gale/shared/ui/src/lib/components/toast/toast.component';
import { ToastService } from '@gale/shared/ui/src/lib/components/toast/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    CommonModule,
    SubHeaderComponent,
    NgbToastModule,
    NgIf,
    ToastComponent,
  ],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemoComponent {
  show = true;
  @ViewChild('uploadTpl') uploadTpl!: TemplateRef<any>;

  constructor(public toastService: ToastService) {}

  showStandard() {
    this.toastService.show('I am a standard toast', {
      header: 'Success',
      className: 'success',
      iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  showSuccess() {
    this.toastService.show('I am a success toast', {
      className: 'bg-success text-light',
      delay: 10000,
    });
  }

  showDanger(dangerTpl: any) {
    this.toastService.show(dangerTpl, {
      className: 'bg-danger text-light',
      delay: 15000,
    });
  }

  toast() {
    this.toastService.success('Toast Succces', {
      header: 'Success',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastPrimary() {
    this.toastService.primary('Toast Primary', {
      header: 'Primary',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastSuccess() {
    this.toastService.success('Toast Succces', {
      header: 'Success',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastDanger() {
    this.toastService.error('Toast Succces', {
      header: 'Danger',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastInfo() {
    this.toastService.info('Toast Info', {
      header: 'Info',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastWarning() {
    this.toastService.warning('Toast Warning', {
      header: 'Warning!',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastSuccessSizes(size: string) {
    this.toastService.success('Toast Success', {
      header: 'Success!',
      iconClass: 'gi-info',
      size,
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }

  toastWithTemplate() {
    this.toastService.success(this.uploadTpl, {
      header: 'Success!',
      iconClass: 'gi-info',
      // iconUrl: 'assets/icons/check-verified.svg',
    });
  }
}
