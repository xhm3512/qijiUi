import React, { FC, useEffect } from 'react';
import QuiTooltip, { TooltipProps } from '../qui-tooltip'
import { getRenderPropValue, RenderFunction } from '../_util/getRenderPropValue';
import { ConfigContext } from '../config-provider/context';
import './style/index.less'
export interface PopoverProps extends TooltipProps {
  content?: React.ReactNode | RenderFunction;
}
const Popover = React.forwardRef<unknown, PopoverProps>(({
  children,
  content,
  prefixCls: customizePrefixCls,
  overlay,
  ...elseProps
}, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const getOverlay = (prefixCls: string) => {
    if (!content) return undefined;
    return  <div className={`${prefixCls}-inner-content`}>{content}</div>
  };
  return <QuiTooltip
    prefixCls={prefixCls}
    ref={ref as any}
    overlay={getOverlay(prefixCls)}
    {...elseProps}
  >
  {children}
  </QuiTooltip>;
  
})


export default Popover;
