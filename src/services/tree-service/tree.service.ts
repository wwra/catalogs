import {Injectable} from '@angular/core';
import {ITreeNode, IComment} from "../../tree-view";

// TODO: Create REST API
// TODO: method GetByParent(id:number)
// TODO: make with Promises RxJs
// TODO: Create recursive method findParent(this.Nodes[0], depth, id): parent: ITReeNode
// TODO: Simplify onDelete()

@Injectable()
export class TreeService {
    constructor () {

    }

    GetNodes () {
        var result = JSON.parse(localStorage.getItem('tree'));
        if (result === null) {
            result = new Array<ITreeNode>();
            result.push({
                id         : '0',
                name       : 'Root',
                description: 'This is a Root Component',
                isExpanded : true,
                children   : new Array<ITreeNode>(),
                comments   : new Array<IComment>()
            });
        }
        return result;
    }

    SaveAll (nodes: Array<ITreeNode>) {
        localStorage.setItem("tree", JSON.stringify(nodes));
    }

    Add (selectedNode: ITreeNode, name: string, description: string) {
        const node = {
            id         : selectedNode.id + '-' + selectedNode.children.length,
            name       : name,
            description: description,
            isExpanded : false,
            children   : new Array<ITreeNode>(),
            comments   : new Array<IComment>()
        };

        selectedNode.children.push(node)
    }

    DeleteNode (root: ITreeNode, depth: string[], title: string) {
        if (depth.length == 1) {
            if (root.children !== undefined) {
                for (let i = 0; i < root.children.length; ++i) {
                    if (root.children[i].name === title) {
                        root.children.splice(i, 1);
                        break;
                    }
                }
            }
            return;
        }
        let level = depth[0];
        depth.splice(0, 1);
        root = root.children[level];
        this.DeleteNode(root, depth, title);
    }
}