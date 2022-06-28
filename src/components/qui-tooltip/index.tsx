import React, { forwardRef,ReactNode } from 'react';
import RcTooltip from 'rc-tooltip';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import './style/index.less'
import { ConfigContext } from '../config-provider/context';

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
  const arrowContentStyle = { '--antd-arrow-background-color': 'rgba(0, 0, 0, 0.85)' };
  const getOverlay = () => {
    const { title, overlay } = props;
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  };

  return <RcTooltip
    prefixCls={prefixCls}
    placement="top"
    ref={ref}
    {...elseProps}
    overlay={getOverlay()}
    arrowContent={<span className={`${prefixCls}-arrow-content`} style={arrowContentStyle} />}
  >
    {visible ? children : <></>}
  </RcTooltip >;
})

export default Tooltip;
