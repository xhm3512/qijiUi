import React, { FC, ReactNode } from 'react';
import './style/index.less';
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    icon?: ReactNode;
    size?: 'large' | 'middle' | 'small';
    loading?: boolean;
    htmlType?: ButtonHTMLType;
    className?: string;
    hover?: boolean;
}
declare const Button: FC<ButtonProps>;
export default Button;
