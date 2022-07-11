import React, { forwardRef,ReactNode } from 'react';
import RcTooltip from 'rc-tooltip';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import './style/index.less'
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
export interface TooltipProps extends RcTooltipProps { title?: ReactNode }

const Tooltip = forwardRef<unknown, TooltipProps>((props, ref) => {
  const {
    visible = true,
    children,
    prefixCls: customizePrefixCls,
    title,
    ...elseProps
  } = props;
  // const prefixCls = 'qui-tooltip'
  const {
    getPrefixCls,
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const arrowContentStyle = { 'backgroundColor': 'rgba(0, 0, 0, 0.85)' };
  const getOverlay = () => {
    const { title, overlay } = props;
    if (title === 0) return title;
    return overlay || title || '';
  };

  return <RcTooltip
    prefixCls={prefixCls}
    placement="top"
    ref={ref}
    {...elseProps}
    overlay={getOverlay()}
    arrowContent={<span className={`${prefixCls}-arrow-content`} style={arrowContentStyle} />}
    motion={{
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000,
    }}
  >
    {visible ? children : <></>}
  </RcTooltip >;
})

export default Tooltip;
