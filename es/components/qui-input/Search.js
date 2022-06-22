var _excluded = ["prefixCls", "disabled", "allowClear", "loading", "onSearch", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import QuiImgIcons from '@/components/qui-img-icons';
import Input from './Input';
var CloseInput = QuiImgIcons.CloseInput,
    SearchInput = QuiImgIcons.SearchInput;
import './style/index.less';
var Search = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'qui-input' : _props$prefixCls,
      disabled = props.disabled,
      allowClear = props.allowClear,
      loading = props.loading,
      customOnSearch = props.onSearch,
      customOnChange = props.onChange,
      elseProps = _objectWithoutProperties(props, _excluded);

  var onSearch = function onSearch(e) {
    if (customOnSearch) {
      var _inputRef$current, _inputRef$current$inp;

      customOnSearch((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : (_inputRef$current$inp = _inputRef$current.input) === null || _inputRef$current$inp === void 0 ? void 0 : _inputRef$current$inp.value, e);
    }
  };

  var CloseInputWrap = function CloseInputWrap() {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-search-close-icon")
    }, /*#__PURE__*/React.createElement(CloseInput, null));
  };

  var inputRef = React.useRef(null);

  var SearchInputWrap = function SearchInputWrap() {
    var loadingClass = classNames("".concat(prefixCls, "-search-icon"), _defineProperty({}, "".concat(prefixCls, "-search-loading-icon"), loading));
    return /*#__PURE__*/React.createElement("div", {
      className: loadingClass,
      onClick: onSearch
    }, /*#__PURE__*/React.createElement(SearchInput, null));
  };

  var onChange = function onChange(e) {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }

    if (customOnChange) {
      customOnChange(e);
    }
  };

  return /*#__PURE__*/React.createElement(Input, _objectSpread({
    ref: composeRef(inputRef, ref),
    allowClear: allowClear ? disabled ? false : {
      clearIcon: /*#__PURE__*/React.createElement(CloseInputWrap, null)
    } : allowClear,
    onPressEnter: onSearch,
    onChange: onChange,
    prefixCls: prefixCls,
    disabled: disabled,
    addonAfter: /*#__PURE__*/React.createElement(SearchInputWrap, null),
    affixWrapperClassName: "".concat(prefixCls, "-wrapper")
  }, elseProps));
});
export default Search;