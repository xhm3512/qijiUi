var _excluded = ["getPopupContainer", "dropdownClassName", "showArrow", "virtual", "defaultOpen", "dropdownStyle", "style", "dropdownMatchSelectWidth", "optionLabelProp", "clearIcon", "prefixCls", "children", "placement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import RcSelect from 'rc-select';
import { getTransitionName, getTransitionDirection } from '../_util/motion';
import { ConfigContext } from '../config-provider/context';
import './style/index.less';

var InternalSelect = function InternalSelect(props) {
  var getPopupContainer = props.getPopupContainer,
      dropdownClassName = props.dropdownClassName,
      _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
      _props$virtual = props.virtual,
      virtual = _props$virtual === void 0 ? true : _props$virtual,
      _props$defaultOpen = props.defaultOpen,
      defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
      _props$dropdownStyle = props.dropdownStyle,
      dropdownStyle = _props$dropdownStyle === void 0 ? {
    maxHeight: 100,
    overflow: "scroll"
  } : _props$dropdownStyle,
      _props$style = props.style,
      style = _props$style === void 0 ? {
    width: 168
  } : _props$style,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      _props$optionLabelPro = props.optionLabelProp,
      optionLabelProp = _props$optionLabelPro === void 0 ? "children" : _props$optionLabelPro,
      clearIcon = props.clearIcon,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      placement = props.placement,
      elseprops = _objectWithoutProperties(props, _excluded);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var rootPrefixCls = getPrefixCls(); // 清楚icon

  var clearIconInit = function clearIconInit() {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-clear-icon")
    });
  };

  return /*#__PURE__*/React.createElement(RcSelect, _objectSpread(_objectSpread({
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, elseprops), {}, {
    defaultOpen: defaultOpen,
    transitionName: getTransitionName(rootPrefixCls, getTransitionDirection(placement), props.transitionName),
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer,
    dropdownClassName: dropdownClassName,
    showArrow: showArrow,
    optionLabelProp: optionLabelProp,
    style: style,
    dropdownStyle: dropdownStyle,
    clearIcon: clearIcon || clearIconInit
  }), children);
};

export default InternalSelect;