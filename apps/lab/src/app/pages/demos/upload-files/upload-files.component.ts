import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../shared/layout/sub-header/sub-header.component';
import { TreeComponent } from '@kore.libs/shared/src';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, TreeComponent],
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFilesComponent {
  TREE_DATA: any = [];

  onFolderSelected(event: any) {
    const folderMap: any = {};
    const treeData = [];
    if (event.target.files.length > 0) {
      const files = event.target.files;

      for (let i = 0; i < files.length; ++i) {
        const file = files[i];

        const pathArr = file.webkitRelativePath.split('/');
        const lastIndex: number = pathArr.length - 1;

        if (folderMap[pathArr[lastIndex - 1]]) {
          treeData.push({
            file,
            name: file.name,
            level: pathArr.length - 1,
            expandable: false,
          });
        } else {
          const parentName = pathArr[lastIndex - 1];
          folderMap[parentName] = true;
          treeData.push({
            file,
            name: parentName,
            level: pathArr.length - 2,
            expandable: true,
          });

          treeData.push({
            file,
            name: file.name,
            level: pathArr.length - 1,
            expandable: false,
          });
        }

        // if (!(files[i].webkitRelativePath.split('/').length > 2)) {
        //   const file = files[i];
        //   // Do whatever you want
        //   console.log(files[i]);
        //   // this.TREE_DATA.push({
        //   //   name: file.name,
        //   //   expandable:
        //   // })
        // } else {
        //   console.log(files[i], 'else');
        // }
      }

      this.TREE_DATA = treeData;
    }
  }
}
