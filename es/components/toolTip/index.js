import React from 'react';
import { Tooltip } from 'antd';
import './style/index.css';

var QuiTooltip = function QuiTooltip(_ref) {
  var children = _ref.children,
    title = _ref.title,
    placement = _ref.placement,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger;
  var prefixCls = 'qiji-oni-tooltip';
  return /*#__PURE__*/ React.createElement(
    Tooltip,
    {
      placement: placement,
      overlayClassName: prefixCls,
      title: title,
      trigger: trigger,
    },
    children,
  );
};

QuiTooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};
export default QuiTooltip;
