/// <reference types="react" />
import { SelectProps as RcSelectProps } from 'rc-select';
import type { BaseOptionType, DefaultOptionType } from 'rc-select/lib/Select';
export declare const tuple: <T extends string[]>(...args: T) => T;
declare const SelectPlacements: ["bottomLeft", "bottomRight", "topLeft", "topRight"];
export declare type SelectCommonPlacement = typeof SelectPlacements[number];
declare const InputStatuses: ["warning", "error", ""];
export declare type InputStatus = typeof InputStatuses[number];
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface InternalSelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> extends Omit<RcSelectProps<ValueType, OptionType>, 'mode'> {
    suffixIcon?: React.ReactNode;
    size?: SizeType;
    mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
    bordered?: boolean;
}
export declare const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
export interface SelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> extends Omit<InternalSelectProps<ValueType, OptionType>, 'inputIcon' | 'mode' | 'getInputElement' | 'getRawInputElement' | 'backfill' | 'placement'> {
    placement?: SelectCommonPlacement;
    mode?: 'multiple' | 'tags';
    status?: InputStatus;
}
export {};
