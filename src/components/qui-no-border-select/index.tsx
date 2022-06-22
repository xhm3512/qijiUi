import React, { FC } from 'react';
import { Option, OptGroup } from 'rc-select';
import InternalSelect from './InternalSelect'
import { SelectProps, SECRET_COMBOBOX_MODE_DO_NOT_USE } from './config'

export type QuiSelectComponent = FC<SelectProps> & {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
}
const QuiSelect = InternalSelect as QuiSelectComponent;
QuiSelect.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
QuiSelect.Option = Option;
QuiSelect.OptGroup = OptGroup;
export default QuiSelect;