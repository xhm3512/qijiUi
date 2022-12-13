import React, { ReactNode } from 'react';
import { InputProps as RcInputProps, InputRef } from 'rc-input';
import './style/index.less';
export interface InputFocusOptions extends FocusOptions {
    cursor?: 'start' | 'end' | 'all';
}
export interface PropsState extends RcInputProps {
    textErr?: ReactNode;
}
export type { InputRef };
export declare function fixControlledValue<T>(value: T): string;
export declare function resolveOnChange<E extends HTMLInputElement | HTMLTextAreaElement>(target: E, e: React.ChangeEvent<E> | React.MouseEvent<HTMLElement, MouseEvent> | React.CompositionEvent<HTMLElement>, onChange: undefined | ((event: React.ChangeEvent<E>) => void), targetValue?: string): void;
export declare function triggerFocus(element?: HTMLInputElement | HTMLTextAreaElement, option?: InputFocusOptions): void;
declare const InternalInput: React.ForwardRefExoticComponent<PropsState & React.RefAttributes<InputRef>>;
export default InternalInput;
export interface InputProps extends Omit<RcInputProps, 'wrapperClassName' | 'groupClassName' | 'inputClassName' | 'affixWrapperClassName'> {
    size?: any;
    status?: any;
    bordered?: boolean;
    [key: `data-${string}`]: string;
}
