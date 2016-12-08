export interface ITreeNode {
    id: string;
    name: string;
    description: string;
    isExpanded: boolean;
    children: Array<ITreeNode>;
    comments: Array<IComment>;

}

export interface IComment {
    username: string;
    initDate: Date ;
    comment: string;
}