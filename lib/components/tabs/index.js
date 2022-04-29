'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

require('./style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TabPane = _antd.Tabs.TabPane;

var tabs = function tabs(_ref) {
  var children = _ref.children;

  var callback = function callback() {};

  return /*#__PURE__*/ _react.default.createElement(
    _antd.Tabs,
    {
      defaultActiveKey: '0',
      onChange: callback,
      tabBarGutter: 42,
      tabBarStyle: {
        // color:'red'
      },
    },
    children.map(function(item, i) {
      return /*#__PURE__*/ _react.default.createElement(
        TabPane,
        {
          tab: item.props.title,
          key: i,
        },
        item,
      );
    }),
  );
};

var _default = tabs;
exports.default = _default;
