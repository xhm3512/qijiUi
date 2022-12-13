import * as React from 'react';
import { CheckedGroupProps } from './interface';
export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxValueType;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: any) => void;
}
export interface CheckboxGroupContext {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
}
export declare const GroupContext: React.Context<CheckboxGroupContext | null>;
declare const CheckedBoxGroup: React.ForwardRefExoticComponent<CheckedGroupProps & React.RefAttributes<HTMLDivElement>>;
export default CheckedBoxGroup;
