"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcSelect = _interopRequireDefault(require("rc-select"));

require("./style/index.less");

var _excluded = ["getPopupContainer", "dropdownClassName", "showArrow", "virtual", "defaultOpen", "dropdownStyle", "style", "dropdownMatchSelectWidth", "optionLabelProp", "clearIcon", "prefixCls", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InternalSelect = function InternalSelect(_ref) {
  var getPopupContainer = _ref.getPopupContainer,
      dropdownClassName = _ref.dropdownClassName,
      _ref$showArrow = _ref.showArrow,
      showArrow = _ref$showArrow === void 0 ? true : _ref$showArrow,
      _ref$virtual = _ref.virtual,
      virtual = _ref$virtual === void 0 ? true : _ref$virtual,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$dropdownStyle = _ref.dropdownStyle,
      dropdownStyle = _ref$dropdownStyle === void 0 ? {
    maxHeight: 100,
    minHeight: 80,
    overflow: "scroll"
  } : _ref$dropdownStyle,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    width: 60
  } : _ref$style,
      _ref$dropdownMatchSel = _ref.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _ref$dropdownMatchSel === void 0 ? true : _ref$dropdownMatchSel,
      _ref$optionLabelProp = _ref.optionLabelProp,
      optionLabelProp = _ref$optionLabelProp === void 0 ? "children" : _ref$optionLabelProp,
      _ref$clearIcon = _ref.clearIcon,
      clearIcon = _ref$clearIcon === void 0 ? true : _ref$clearIcon,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'qui-no-border-select' : _ref$prefixCls,
      children = _ref.children,
      elseprops = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_rcSelect.default, _objectSpread(_objectSpread({
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, elseprops), {}, {
    defaultOpen: defaultOpen,
    // transitionName='223'
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer,
    dropdownClassName: dropdownClassName,
    showArrow: showArrow,
    optionLabelProp: optionLabelProp,
    style: style,
    dropdownStyle: dropdownStyle,
    clearIcon: clearIcon
  }), children);
};

var _default = InternalSelect;
exports.default = _default;