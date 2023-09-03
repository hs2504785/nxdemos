import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { DataSourceListComponent } from '@app/searchassist/data-source';
// import { DataSourceListComponent } from '@app/searchassist/data-source';

@Component({
  selector: 'app-upload-files-tree',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, DataSourceListComponent],
  templateUrl: './upload-files-tree.component.html',
  styleUrls: ['./upload-files-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFilesTreeComponent {
  TREE_DATA: any = [];
  onFolderSelected(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.TREE_DATA = files;
    }
  }
}
