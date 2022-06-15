var _excluded = ["children", "title", "placement", "trigger", "overlayClassName"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import "./style/index.css";

var QuiTooltip = function QuiTooltip(_ref) {
  var children = _ref.children,
      title = _ref.title,
      placement = _ref.placement,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
      overlayClassName = _ref.overlayClassName,
      elseParams = _objectWithoutProperties(_ref, _excluded);

  var prefixCls = 'qiji-oni-tooltip';
  return /*#__PURE__*/React.createElement(Tooltip, {
    placement: placement,
    overlayClassName: classNames(prefixCls, overlayClassName),
    title: title,
    trigger: trigger
  }, children);
};

QuiTooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
export default QuiTooltip;