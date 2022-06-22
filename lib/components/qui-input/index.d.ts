import { FC, RefAttributes, ForwardRefExoticComponent } from 'react';
import { InputRef, PropsState } from './Input';
import { PropsSearchState } from './Search';
export interface CompoundedComponent extends ForwardRefExoticComponent<PropsState & RefAttributes<InputRef>> {
    QuiSearch: FC<PropsSearchState>;
}
declare const Input: CompoundedComponent;
export default Input;
