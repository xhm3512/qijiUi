function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "style", "className"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import RadioGroupContext from './context';
import './style/index.less';
var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;
  var innerRef = React.useRef();
  var mergedRef = composeRef(ref, innerRef);
  var context = React.useContext(RadioGroupContext);
  var prefixCls = 'qui-radio';
  var children = props.children,
    style = props.style,
    className = props.className,
    restProps = _objectWithoutProperties(props, _excluded);
  var radioProps = _objectSpread({}, restProps);
  var onChange = function onChange(e) {
    var _props$onChange, _context$onChange;
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, e);
    context === null || context === void 0 ? void 0 : (_context$onChange = context.onChange) === null || _context$onChange === void 0 ? void 0 : _context$onChange.call(context, e);
  };
  var isChecked = context ? props.value === (context === null || context === void 0 ? void 0 : context.value) : radioProps.checked;
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = isChecked;
    radioProps.disabled = props.disabled || context.disabled;
  }
  return /*#__PURE__*/React.createElement("label", {
    style: style,
    className: classNames("".concat(prefixCls, "-wrapper"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), isChecked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), _classNames), className)
  }, /*#__PURE__*/React.createElement(RcCheckbox, _objectSpread(_objectSpread({
    type: "radio",
    ref: mergedRef
  }, radioProps), {}, {
    prefixCls: prefixCls
  })), children !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-text")
  }, children) : null);
};
var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
export default Radio;