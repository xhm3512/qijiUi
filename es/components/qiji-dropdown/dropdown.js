function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import RcDropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import React from 'react';
import classNames from 'classnames';
import { cloneElement } from '../_util/reactNode';
// import 'rc-dropdown/assets/index.css';
import { ConfigContext } from '../config-provider/context';
import './style/index.less';
function onSelect(_ref) {
  var key = _ref.key;
  console.log("".concat(key, " selected"));
}
var Placements = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom'];
var Dropdown = function Dropdown(props) {
  var customizePrefixCls = props.prefixCls,
    trigger = props.trigger,
    disabled = props.disabled,
    getPopupContainer = props.getPopupContainer,
    dropdownRender = props.dropdownRender,
    menu = props.menu,
    children = props.children;
  var _React$useContext = React.useContext(ConfigContext),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = React.Children.only(children);
  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
      placement = _props$placement === void 0 ? '' : _props$placement,
      transitionName = props.transitionName;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return "".concat(rootPrefixCls, "-slide-down");
    }
    return "".concat(rootPrefixCls, "-slide-up");
  };
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;
  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }
  var dropdownTrigger = cloneElement(child, {
    className: classNames("".concat(prefixCls, "-trigger"), child.props.className),
    disabled: disabled
  });
  var renderOverlay = function renderOverlay() {
    var overlay = props.overlay;
    var menuRender = function menuRender() {
      return /*#__PURE__*/React.createElement(Menu, {
        onSelect: onSelect,
        className: "".concat(prefixCls, "-menu")
      }, menu.map(function (item) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: item.key,
          disabled: item.disabled
        }, item.label);
      }));
    };
    var overlayNode;
    if (menu) {
      overlayNode = menuRender();
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, overlayNode) : /*#__PURE__*/React.createElement(React.Fragment, null, overlayNode));
    return overlayNode;
  };
  return /*#__PURE__*/React.createElement(RcDropdown, _objectSpread(_objectSpread({
    alignPoint: alignPoint
  }, props), {}, {
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    trigger: triggerActions,
    overlay: renderOverlay,
    animation: "slide-up",
    transitionName: getTransitionName()
  }), dropdownTrigger);
};
export default Dropdown;