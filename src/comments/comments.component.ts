import {Component, OnInit, Input} from '@angular/core';
import {ITreeNode} from "../tree-view";
import {TreeService} from "../services/tree-service";

//TODO: check if the node exists

@Component({
    selector: 'ra-comments',
    template: require('./comments.html')
})
export class CommentsComponent implements OnInit {
    @Input() selectedNode: ITreeNode;
    @Input() Nodes: Array<ITreeNode>;

    username: string;
    comment: string;

    constructor (private treeService: TreeService) {
    }

    ngOnInit () {
        this.selectedNode = this.Nodes[0];

    }

    onSave () {
        if (this.username.length < 1 && this.comment.length < 1) return;
        if (this.selectedNode.comments) {
            this.selectedNode.comments.push({
                username: this.username,
                initDate: new Date(),
                comment : this.comment
            });
            this.treeService.SaveAll(this.Nodes);
            this.comment = this.username = '';
        }
    }
}