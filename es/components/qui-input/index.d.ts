import { FC, RefAttributes, ForwardRefExoticComponent } from 'react';
import { InputRef, PropsState } from './Input';
import { PropsSearchState } from './Search';
import TextArea from './TextArea';
export { TextAreaProps } from './TextArea';
export interface CompoundedComponent extends ForwardRefExoticComponent<PropsState & RefAttributes<InputRef>> {
    QuiSearch: FC<PropsSearchState>;
    TextArea: typeof TextArea;
}
declare const Input: CompoundedComponent;
export default Input;
