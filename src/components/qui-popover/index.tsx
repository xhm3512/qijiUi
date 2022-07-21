import React from 'react';
import QuiTooltip, { TooltipProps } from '../qui-tooltip'
import { RenderFunction } from '../_util/getRenderPropValue';
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
import './style/index.less'
export interface PopoverProps extends TooltipProps {
  content?: React.ReactNode | RenderFunction;
}
const Popover = React.forwardRef<unknown, PopoverProps>(({
  content,
  prefixCls: customizePrefixCls,
  overlay,
  ...elseProps
}, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const getOverlay = (prefixCls: string) => {
    if (!content) return undefined;
    return  <div className={`${prefixCls}-inner-content`}>{content}</div>
  };
  return <QuiTooltip
    prefixCls={prefixCls}
    ref={ref as any}
    overlay={getOverlay(prefixCls)}
    transitionName={getTransitionName(rootPrefixCls, 'zoom-big', elseProps?.transitionName)}
    {...elseProps}
  />
})


export default Popover;
