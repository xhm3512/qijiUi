import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
declare const ClearableInputType: ["text", "input"];
export interface FormItemStatusContextProps {
    status?: any;
    hasFeedback?: boolean;
}
export declare const FormItemStatusContext: React.Context<FormItemStatusContextProps>;
/** This basic props required for input and textarea. */
interface BasicProps {
    prefixCls: string;
    inputType: typeof ClearableInputType[number];
    value?: any;
    allowClear?: boolean;
    element: React.ReactElement;
    handleReset: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    direction?: any;
    focused?: boolean;
    readOnly?: boolean;
    bordered: boolean;
    hidden?: boolean;
}
/** This props only for input. */
export interface ClearableInputProps extends BasicProps {
    size?: SizeType;
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    triggerFocus?: () => void;
    status?: any;
}
declare class ClearableLabeledInput extends React.Component<ClearableInputProps> {
    renderClearIcon(prefixCls: string): JSX.Element;
    renderTextAreaWithClearIcon(prefixCls: string, element: React.ReactElement, statusContext: any): JSX.Element;
    render(): JSX.Element;
}
export default ClearableLabeledInput;
