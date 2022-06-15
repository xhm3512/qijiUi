import * as React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState, ErrorProps } from '../interface/propsInterface';
export declare class DefaultErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState, ErrorProps> {
    readonly state: Readonly<ErrorBoundaryState>;
    static getDerivedStateFromError(err: Error): {
        hasError: boolean;
        err: Error;
    };
    componentDidCatch(err: Error, info: React.ErrorInfo): void;
    render(): React.ReactNode;
}
export default DefaultErrorBoundary;
