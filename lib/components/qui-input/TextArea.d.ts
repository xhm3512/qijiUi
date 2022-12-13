import { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import * as React from 'react';
import { ReactNode } from 'react';
import { InputFocusOptions } from './Input';
declare const InputStatuses: ["warning", "error", ""];
export type InputStatus = typeof InputStatuses[number];
interface ShowCountProps {
    formatter: (args: {
        count: number;
        maxLength?: number;
    }) => string;
}
export interface TextAreaProps extends RcTextAreaProps {
    allowClear?: boolean;
    bordered?: boolean;
    showCount?: boolean | ShowCountProps;
    status?: InputStatus;
    textErr?: ReactNode;
}
export interface TextAreaRef {
    focus: (options?: InputFocusOptions) => void;
    blur: () => void;
    resizableTextArea?: any;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<TextAreaRef>>;
export default TextArea;
