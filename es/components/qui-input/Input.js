var _excluded = ["prefixCls", "textErr", "disabled", "allowClear"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useRef } from 'react';
import RcInput from 'rc-input';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import QuiImgIcons from '@/components/qui-img-icons';
var CloseInput = QuiImgIcons.CloseInput;
import './style/index.less';
var InternalInput = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'qui-input' : _props$prefixCls,
      textErr = props.textErr,
      disabled = props.disabled,
      allowClear = props.allowClear,
      elseProps = _objectWithoutProperties(props, _excluded);

  var inputRef = useRef(null);

  var CloseInputWrap = function CloseInputWrap() {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-close-icon")
    }, /*#__PURE__*/React.createElement(CloseInput, null));
  }; // Allow clear


  var mergedAllowClear;

  if (_typeof(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/React.createElement(CloseInputWrap, null)
    };
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RcInput, _objectSpread({
    ref: composeRef(ref, inputRef),
    allowClear: mergedAllowClear,
    prefixCls: prefixCls,
    disabled: disabled,
    affixWrapperClassName: "".concat(prefixCls, "-wrapper"),
    inputClassName: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-error"), !!textErr), _defineProperty(_classNames, "".concat(prefixCls, "-normal"), !textErr), _classNames))
  }, elseProps)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-err-text")
  }, textErr));
});
export default InternalInput;