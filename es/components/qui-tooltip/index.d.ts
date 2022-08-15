import React, { ReactNode } from 'react';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import './style/index.less';
export interface TooltipProps extends RcTooltipProps {
    title?: ReactNode;
}
export declare type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>>;
export default Tooltip;
