import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../../../../../../shared/layout/sub-header/sub-header.component';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface NestedTreeNode {
  name: string;
  children?: NestedTreeNode[];
}

export const NESTED_TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Fruit NESTED',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables NESTED',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-nested-tree',
  standalone: true,
  templateUrl: './nested-tree.component.html',
  styleUrls: ['./nested-tree.component.scss'],
  imports: [CommonModule, SubHeaderComponent, CdkTreeModule],
})
export class NestedTreeComponent {
  treeControl = new NestedTreeControl<NestedTreeNode>((node) => node.children);
  dataSource = new ArrayDataSource(NESTED_TREE_DATA);

  hasChild = (_: number, node: NestedTreeNode) =>
    !!node.children && node.children.length > 0;
}
