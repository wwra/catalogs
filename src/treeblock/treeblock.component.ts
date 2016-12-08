import {Component, OnInit, Output} from '@angular/core';
import {ITreeNode} from '../tree-view';
import {TreeService} from "../services/tree-service";
import {EventEmitter, Input} from "@angular/core";

@Component({
    selector: "ra-treeblock",
    template: require('./treeblock.html')
})
export class TreeBlockComponent implements OnInit {
    @Input() Nodes: Array<ITreeNode>;

    @Output() nodeSelected = new EventEmitter <ITreeNode>();
              name: string;
              description: string;
              selectedNode: ITreeNode;

    constructor (private treeService: TreeService) {
    }

    ngOnInit () {
        this.selectedNode = this.Nodes[0];
    }

    onSelectNode (node: ITreeNode) {
        this._selectRoot(node);
    }

    onDelete (node: ITreeNode) {
        let depth = node.id.split('-');
        if (depth.length == 1) {
            this.Nodes[0].children = this.Nodes[0].comments = [];
            this.treeService.SaveAll(this.Nodes);

        } else {
            depth.splice(0, 1);
            this.treeService.DeleteNode(this.Nodes[0], depth, node.name);
            this.treeService.SaveAll(this.Nodes);
        }
        this._selectRoot(this.Nodes[0]);
    }

    onAddNode () {
        if (!this.selectedNode.isExpanded) {
            this.selectedNode.isExpanded = true;
        }

        this.treeService.Add(this.selectedNode, this.name, this.description);
        this.treeService.SaveAll(this.Nodes);
        this.name = this.description = '';
    }

    _selectRoot (node: ITreeNode) {
        this.selectedNode = node;
        this.nodeSelected.emit(node);
    }
}