"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ref = require("rc-util/lib/ref");

var _quiImgIcons = _interopRequireDefault(require("../qui-img-icons"));

var _Input = _interopRequireDefault(require("./Input"));

require("./style/index.less");

var _excluded = ["prefixCls", "disabled", "allowClear", "loading", "onSearch", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CloseInput = _quiImgIcons.default.CloseInput,
    SearchInput = _quiImgIcons.default.SearchInput;

var Search = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-search-close-icon")
    }, /*#__PURE__*/_react.default.createElement(CloseInput, null));
  };

  var inputRef = _react.default.useRef(null);

  var SearchInputWrap = function SearchInputWrap() {
    var loadingClass = (0, _classnames.default)("".concat(prefixCls, "-search-icon"), _defineProperty({}, "".concat(prefixCls, "-search-loading-icon"), loading));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: loadingClass,
      onClick: onSearch
    }, /*#__PURE__*/_react.default.createElement(SearchInput, null));
  };

  var onChange = function onChange(e) {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }

    if (customOnChange) {
      customOnChange(e);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_Input.default, _objectSpread({
    ref: (0, _ref.composeRef)(inputRef, ref),
    allowClear: allowClear ? disabled ? false : {
      clearIcon: /*#__PURE__*/_react.default.createElement(CloseInputWrap, null)
    } : allowClear,
    onPressEnter: onSearch,
    onChange: onChange,
    prefixCls: prefixCls,
    disabled: disabled,
    addonAfter: /*#__PURE__*/_react.default.createElement(SearchInputWrap, null),
    affixWrapperClassName: "".concat(prefixCls, "-wrapper")
  }, elseProps));
});

var _default = Search;
exports.default = _default;