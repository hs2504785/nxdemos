import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uiHost]',
  standalone: true,
})
export class HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
