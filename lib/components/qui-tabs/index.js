"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

require("./style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs.default.TabPane;

var tabs = function tabs(_ref) {
  var children = _ref.children;

  var callback = function callback() {};

  return /*#__PURE__*/_react.default.createElement(_tabs.default, {
    defaultActiveKey: "0",
    onChange: callback,
    tabBarGutter: 42,
    tabBarStyle: {// color:'red'
    }
  }, children.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: item.props.title,
      key: i
    }, item);
  }));
};

var _default = tabs;
exports.default = _default;