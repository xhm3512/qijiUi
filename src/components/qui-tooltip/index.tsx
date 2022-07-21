import React, { forwardRef, ReactNode ,useState} from 'react';
import RcTooltip from 'rc-tooltip';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import './style/index.less'
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
import { isValidElement,cloneElement } from '../_util/reactNode';
export interface TooltipProps extends RcTooltipProps { title?: ReactNode }
export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
const Tooltip = forwardRef<unknown, TooltipProps>((props, ref) => {
  const {
    children,
    prefixCls: customizePrefixCls,
    // visible:customizeVisibile=false,
    title,
    ...elseProps
  } = props;
  // const prefixCls = 'qui-tooltip'
  const {
    getPrefixCls,
  } = React.useContext(ConfigContext);
  
  const [visible, setVisible] = useMergedState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible,
  });
  const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const arrowContentStyle = { 'backgroundColor': 'rgba(0, 0, 0, 0.85)' };
  const getOverlay = () => {
    const { title, overlay } = props;
    if (title === 0) return title;
    return overlay || title || '';
  };
  const child = isValidElement(children) ? children : <span>{children}</span>

  const onVisibleChange = (vis: boolean) => {
    setVisible(vis);
    props.onVisibleChange?.(vis);
  };
  return <RcTooltip
    {...elseProps}
    prefixCls={prefixCls}
    ref={ref}
    visible={visible}
    overlay={getOverlay()}
    onVisibleChange={onVisibleChange}
    arrowContent={<span className={`${prefixCls}-arrow-content`} style={arrowContentStyle} />}
    motion={{
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000,
    }}
  >
    {visible ? cloneElement(child) : child}
  </RcTooltip >;
})

Tooltip.defaultProps = {
  placement: 'top' as TooltipPlacement,
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
};
export default Tooltip;
