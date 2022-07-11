import * as React from 'react';

var Empty = function Empty(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, "not found");
};

import { ConfigConsumer } from '../config-provider/context';

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(Empty, null);

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(Empty, {
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(Empty, null);
    }
  });
};

export default renderEmpty;