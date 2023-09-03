import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../../shared/layout/sub-header/sub-header.component';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import {
  NESTED_TREE_DATA,
  NestedTreeNode,
} from '../nested-tree/nested-tree.component';

const TREE_DATA: TreeFlatNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 1,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 1,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 1,
  },
  {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  },
  {
    name: 'Green',
    expandable: true,
    level: 1,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 2,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 2,
  },
  {
    name: 'Orange',
    expandable: true,
    level: 1,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 2,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 2,
  },
];

/** Flat node with expandable and level information */
interface TreeFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-flat-tree',
  standalone: true,
  templateUrl: './flat-tree.component.html',
  styleUrls: ['./flat-tree.component.scss'],
  imports: [CommonModule, SubHeaderComponent, CdkTreeModule],
})
export class FlatTreeComponent implements OnInit {
  treeControl = new FlatTreeControl<TreeFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  dataSource = new ArrayDataSource(TREE_DATA);

  /***NESTED TREE*******/
  treeFlattener = new MatTreeFlattener(
    (node: NestedTreeNode, level: number): TreeFlatNode => {
      return {
        name: node.name,
        expandable: !!node.children?.length,
        level,
      };
    },
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  flatDataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );
  /***NESTED TREE*******/

  hasChild = (_: number, node: TreeFlatNode) => node.expandable;

  getParentNode(node: TreeFlatNode) {
    // let TREE_ARR: TreeFlatNode[] = TREE_DATA;
    // if (isNested) {
    //   TREE_ARR = this.treeControl.dataNodes;
    // }
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: TreeFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

  ngOnInit(): void {
    // NESTED TREE
    this.flatDataSource.data = NESTED_TREE_DATA;
  }
}
