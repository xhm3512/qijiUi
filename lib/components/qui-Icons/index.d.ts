import React from 'react';
export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: {
    HomeCustom: (props: any) => JSX.Element;
    WorksManagerCustom: (props: any) => JSX.Element;
    DataCustom: (props: any) => JSX.Element;
    SalaryCustom: (props: any) => JSX.Element;
    UserCustom: (props: any) => JSX.Element;
    NewsCustom: (props: any) => JSX.Element;
    ArrowCustom: (props: any) => JSX.Element;
    ToolTipCustom: React.FC<{
        active: boolean;
    }>;
    SwitchCustom: (props: any) => JSX.Element;
};
export default _default;
