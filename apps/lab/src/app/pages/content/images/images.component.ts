import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {}
