import { FC } from 'react';
import { Option, OptGroup } from 'rc-select';
import { SelectProps } from './config';
export type QuiSelectComponent = FC<SelectProps> & {
    SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
    Option: typeof Option;
    OptGroup: typeof OptGroup;
};
declare const QuiSelect: QuiSelectComponent;
export default QuiSelect;
