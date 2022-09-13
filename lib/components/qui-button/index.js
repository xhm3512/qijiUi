"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));

var _type = require("../_util/type");

require("./style/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');
var prefixCls = 'qiji-oni-btn';

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      disabled = _ref.disabled,
      icon = _ref.icon,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'middle' : _ref$size,
      _ref$htmlType = _ref.htmlType,
      htmlType = _ref$htmlType === void 0 ? 'button' : _ref$htmlType,
      className = _ref.className,
      _ref$hover = _ref.hover,
      hover = _ref$hover === void 0 ? false : _ref$hover;
  var iconNode = icon && !loading ? /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, icon) : icon || loading ? /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement(_LoadingIcon.default, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!loading
  })) : /*#__PURE__*/_react.default.createElement("span", null);
  var classes = (0, _classnames.default)("".concat(prefixCls, " ").concat(prefixCls, "-button"), "".concat(prefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type, "-").concat(size), className, _defineProperty({}, "".concat(prefixCls, "-").concat(type, "-hover"), hover));
  return /*#__PURE__*/_react.default.createElement("button", {
    className: classes,
    onClick: onClick,
    disabled: disabled,
    type: htmlType
  }, iconNode, children);
};

var _default = Button;
exports.default = _default;