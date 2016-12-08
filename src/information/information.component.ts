import {Component, OnInit, Input} from '@angular/core';
import {ITreeNode} from "../tree-view";

@Component({
    selector: 'ra-information',
    template: require('./information.html')
})
export class DescriptionComponent implements OnInit {
    @Input() selectedNode: ITreeNode;

    constructor () {
    }

    ngOnInit () {
    }

}