// import {Component, Input, Output, EventEmitter} from '@angular/core';
//
// export interface ITreeNode {
//     id: number;
//     name: string;
//     children: Array<ITreeNode>;
// }
//
// @Component({
//     selector: "tree-view",
//     template: `
// <ul class="treenodes">
// 	<li #li *ngFor="let node of Nodes" class="treenode">
// 		<i class="nodebutton fa"
// 		   (click)="onExpand(li, node)"
// 		   [ngClass]="{'fa-minus-square-o': isExpanden(li), 'fa-plus-square-o': !isExpanden(li)}">
// 		</i>
//
// 		<span class="nodetext"
// 			  [ngClass]="{'bg-info': node == SelectedNode}"
// 			  (click)="onSelectNode(node)">
// 			{{node.name}}
// 		</span>
//
// 		<tree-view [Nodes]="node.children"
// 				   [SelectedNode]="SelectedNode"
// 				   (onSelectedChanged)="onSelectNode($event)"
// 				   (onRequestNodes)="onRequest($event)"
// 				   *ngIf="isExpanden(li)">
// 		</tree-view>
// 	</li>
// </ul>
// `
// })
// export class TreeViewComponent {
//
//     @Input() Nodes: Array<ITreeNode>;
//     @Input() SelectedNode: ITreeNode;
//
//     @Output() onSelectedChanged: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
//     @Output() onRequestNodes: EventEmitter<ITreeNode>    = new EventEmitter<ITreeNode>();
//
//     constructor () {
//     }
//
//     onSelectNode (node: ITreeNode) {
//         this.onSelectedChanged.emit(node);
//     }
//
//     onExpand (li: HTMLLIElement, node: ITreeNode) {
//         if (this.isExpanden(li)) {
//             li.classList.remove('expanded');
//         }
//         else {
//             li.classList.add('expanded');
//
//             if (node.children.length == 0) {
//                 this.onRequest(node);
//             }
//         }
//     }
//
//     onRequest (parent: ITreeNode) {
//         this.onRequestNodes.emit(parent);
//     }
//
//     isExpanden (li: HTMLLIElement) {
//         return li.classList.contains('expanded');
//     }
// }

import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ITreeNode} from ".";

@Component({
    selector: "tree-view",
    template: require("./treeview.component.html"),
    styles  : [require('./treeview.scss')]
})
export class TreeViewComponent implements OnInit {
    ngOnInit (): void {

    }

    @Input() Nodes: Array<ITreeNode>;
    @Input() SelectedNode: ITreeNode;

    @Output() onSelectedChanged: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
    @Output() onDeleteNode: EventEmitter<ITreeNode>      = new EventEmitter<ITreeNode>();

    constructor () {
    }

    onSelectNode (node: ITreeNode) {
        this.onSelectedChanged.emit(node);
    }

    onDelete (node: ITreeNode) {
        this.onDeleteNode.emit(node);
    }

    onExpand (node: ITreeNode) {
        node.isExpanded = !node.isExpanded;
    }
}