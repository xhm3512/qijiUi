import React, { useEffect } from 'react';
import './style/index.css';
var prefixCls = 'dumi-oni-btn';

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    disabled = _ref.disabled;
  useEffect(function() {}, []);
  var className = ''
    .concat(prefixCls, ' ')
    .concat(prefixCls, '-button ')
    .concat(prefixCls, '-')
    .concat(type);
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      className: className,
      onClick: onClick,
      disabled: disabled,
    },
    children,
  );
};

export default Button;
