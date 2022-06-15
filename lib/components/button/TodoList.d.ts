import { Component } from 'react';
interface IUndoListProps {
    deleteItem?: Function;
    list: any;
    changeStatus?: Function;
}
declare class UndoList extends Component<IUndoListProps> {
    render(): JSX.Element;
}
export default UndoList;
