import React, { ReactNode } from 'react';
import { InputProps as RcInputProps, InputRef } from 'rc-input';
import './style/index.less';
export interface PropsState extends RcInputProps {
    textErr?: ReactNode;
}
export type { InputRef };
declare const InternalInput: React.ForwardRefExoticComponent<PropsState & React.RefAttributes<InputRef>>;
export default InternalInput;
