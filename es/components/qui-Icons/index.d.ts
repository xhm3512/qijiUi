import React from 'react';
import './style/index.less';
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
    EditorCustom: (props: any) => JSX.Element;
    PreviewCustom: (props: any) => JSX.Element;
    PreviewHiddenCustom: (props: any) => JSX.Element;
    DeleteCustom: (props: any) => JSX.Element;
    SoundCustom: (props: any) => JSX.Element;
    BottomCustom: (props: any) => JSX.Element;
};
export default _default;
