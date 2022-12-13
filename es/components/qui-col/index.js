function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "className", "style", "flex", "span"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from "classnames";
import "./style/index.less";
/**
 * 页面中最常用的的按钮元素他是最基础的组件，没有样式，只是生成 span 和 a dom节点
 * ### 引用方法
 *
 * ~~~js
 * import { PuiCol } from '@jdplus/pui'
 * ~~~
 */
export var PuiCol = function PuiCol(props) {
  var children = props.children,
    className = props.className,
    style = props.style,
    flex = props.flex,
    span = props.span,
    restProps = _objectWithoutProperties(props, _excluded);
  var classes = classNames('pui-col', _defineProperty({}, "pui-col-".concat(span), span), className);
  // 判断  flex 是否是数字  判断flex是否是字符串  判断flex是否是 复合类型 1 1 200px
  if (typeof flex == 'string' && flex.trim().split(/\s+/).length == 1) {
    flex = flex.trim().toLocaleLowerCase();
    if (flex.indexOf('px') > -1) {
      flex = "0 0 ".concat(flex);
    }
  }
  if (typeof flex == 'number') {
    flex = "".concat(flex, " ").concat(flex, " auto");
  }
  style = _objectSpread({
    flex: flex
  }, style);
  // console.log(style)
  return /*#__PURE__*/React.createElement("div", _objectSpread({
    style: style,
    className: classes
  }, restProps), children);
};
PuiCol.defaultProps = {};
export default PuiCol;