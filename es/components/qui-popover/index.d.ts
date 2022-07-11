import React from 'react';
import { TooltipProps } from '../qui-tooltip';
import { RenderFunction } from '../_util/getRenderPropValue';
import './style/index.less';
export interface PopoverProps extends TooltipProps {
    content?: React.ReactNode | RenderFunction;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<unknown>>;
export default Popover;
