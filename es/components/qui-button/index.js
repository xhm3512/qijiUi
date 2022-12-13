function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';
import { tuple } from '../_util/type';
import './style/index.less';
var ButtonHTMLTypes = tuple('submit', 'button', 'reset');
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
  var iconNode = icon && !loading ? icon : icon || loading ? /*#__PURE__*/React.createElement(LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!loading
  }) : /*#__PURE__*/React.createElement("span", null);
  var classes = classNames("".concat(prefixCls, " ").concat(prefixCls, "-button"), "".concat(prefixCls, "-").concat(type), "".concat(prefixCls, "-").concat(type, "-").concat(size), className, _defineProperty({}, "".concat(prefixCls, "-").concat(type, "-hover"), hover));
  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    onClick: onClick,
    disabled: disabled,
    type: htmlType
  }, iconNode, /*#__PURE__*/React.createElement("span", null, children));
};
export default Button;