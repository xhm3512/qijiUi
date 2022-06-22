import { SelectProps as RcSelectProps } from 'rc-select';
import type { BaseOptionType, DefaultOptionType } from 'rc-select/lib/Select';
export const tuple = <T extends string[]>(...args: T) => args;
const SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
export type SelectCommonPlacement = typeof SelectPlacements[number];
const InputStatuses = tuple('warning', 'error', '');
export type InputStatus = typeof InputStatuses[number];

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface InternalSelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<RcSelectProps<ValueType, OptionType>, 'mode'> {
  suffixIcon?: React.ReactNode;
  size?: SizeType;
  mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
  bordered?: boolean;
}
export const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
export interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    'inputIcon' | 'mode' | 'getInputElement' | 'getRawInputElement' | 'backfill' | 'placement'
  > {
  placement?: SelectCommonPlacement;
  mode?: 'multiple' | 'tags';
  status?: InputStatus;
}



