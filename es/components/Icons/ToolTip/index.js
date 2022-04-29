function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import React from 'react';
import classNames from 'classnames';
import './style/index.css';
import { Row } from 'antd';

var ToolTip = function ToolTip(_ref) {
  var _classNames;

  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var prefixCls = 'qiu-tooltip';
  var classes = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-box'), active),
    _defineProperty(_classNames, ''.concat(prefixCls, '-active-box'), !active),
    _classNames),
  );
  return /*#__PURE__*/ React.createElement(
    Row,
    {
      justify: 'center',
      align: 'middle',
      className: classes,
    },
    '?',
  );
};

export default ToolTip;
