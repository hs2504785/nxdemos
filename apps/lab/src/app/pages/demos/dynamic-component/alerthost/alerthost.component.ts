import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../shared/layout/sub-header/sub-header.component';
import { Subscription } from 'rxjs';
import { HostDirective } from '@gale/ui/src';

@Component({
  selector: 'app-alerthost',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, HostDirective],
  templateUrl: './alerthost.component.html',
  styleUrls: ['./alerthost.component.css'],
  providers: [],
})
export class AlerthostComponent {
  @ViewChild(HostDirective, { static: false }) alertHost!: HostDirective;
  vcr = inject(ViewContainerRef);
  private closeSub!: Subscription;

  async addAlert(message: string) {
    this.vcr.clear();
    const { AlertDialogComponent } = await import(
      '../components/alert-dialog/alert-dialog.component'
    );
    const componentRef: any = this.vcr.createComponent(AlertDialogComponent);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.closed.subscribe(() => {
      this.closeSub.unsubscribe();
      this.vcr.clear();
      console.log('CLOOOse');
    });
  }

  async addAlertInline(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const { AlertComponent } = await import(
      '../components/alert/alert.component'
    );
    const componentRef: any =
      hostViewContainerRef.createComponent(AlertComponent);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.closed.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      console.log('CLOOOse');
    });
  }

  async addAlertOutside(message: string) {
    this.vcr.clear();
    const { AlertComponent } = await import(
      '../components/alert/alert.component'
    );
    const componentRef: any = this.vcr.createComponent(AlertComponent);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.closed.subscribe(() => {
      this.closeSub.unsubscribe();
      this.vcr.clear();
      console.log('CLOOOse');
    });
  }
}
