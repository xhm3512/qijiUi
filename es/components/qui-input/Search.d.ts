import React from 'react';
import { InputProps as RcInputProps } from 'rc-input';
import { InputRef } from './Input';
import './style/index.less';
export interface PropsSearchState extends RcInputProps {
    loading?: boolean;
    onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Search: React.ForwardRefExoticComponent<PropsSearchState & React.RefAttributes<InputRef>>;
export default Search;
