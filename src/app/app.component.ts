import {Component, OnInit} from '@angular/core';
import {ITreeNode} from "../tree-view";
import {TreeService} from "../services/tree-service";

@Component({
    selector: 'ra-app',
    template: require('./app.component.html'),
    styles  : [require('./app.component.scss')]
})
export class AppComponent implements OnInit {
    selectedNode: ITreeNode;
    Nodes: Array<ITreeNode>;

    ngOnInit (): void {
        this.Nodes        = this.treeService.GetNodes();
        this.selectedNode = this.Nodes[0];
    }

    constructor (private treeService: TreeService) {
    }

}
