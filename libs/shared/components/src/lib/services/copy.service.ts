import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyService {
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
