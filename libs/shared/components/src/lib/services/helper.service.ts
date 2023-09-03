import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private _loadedLibraries: { [url: string]: Promise<void> } = {};

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadStyle(url: string): Promise<void> {
    if (!this._loadedLibraries[url]) {
      this._loadedLibraries[url] = new Promise((resolve) => {
        const style = this.document.createElement('link');
        style.type = 'text/css';
        style.href = url;
        style.rel = 'stylesheet';
        style.onload = () => {
          resolve();
        };

        const head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
      });
    }

    return this._loadedLibraries[url];
  }
}
