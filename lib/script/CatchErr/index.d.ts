import * as React from 'react';
import { ComponentClass, FunctionComponent, ReactNode } from 'react';
import { ErrorProps } from './interface/propsInterface';
declare const catchreacterror: (abnormalLog: ErrorProps) => (InnerComponent: ComponentClass | FunctionComponent) => React.ForwardRefExoticComponent<{
    forwardedRef?: React.Ref<React.Component<{}, any, any>> | undefined;
    children?: ReactNode;
    abnormalLog?: {
        l: string;
        d: string;
        f: string;
        textErr: string;
    } | undefined;
} & React.RefAttributes<React.Component<{}, any, any>>> | ((props: {
    children?: ReactNode;
    abnormalLog?: {
        l: string;
        d: string;
        f: string;
        textErr: string;
    } | undefined;
}) => JSX.Element);
export default catchreacterror;
