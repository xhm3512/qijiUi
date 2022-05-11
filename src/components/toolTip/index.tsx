import React from 'react';
import { Tooltip } from 'antd';
import { TooltipProps } from 'antd/es/tooltip';
import './style/index.less';
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
const QuiTooltip = ({
  children,
  title,
  placement,
  trigger = 'hover',
  ...elseParams
}: TooltipProps) => {
  const prefixCls = 'qiji-oni-tooltip';
  return (
    <Tooltip
      placement={placement}
      overlayClassName={prefixCls}
      title={title}
      trigger={trigger}
      {...elseParams}
    >
      {children}
    </Tooltip>
  );
};
QuiTooltip.defaultProps = {
  placement: 'top' as TooltipPlacement,
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};
export default QuiTooltip;
