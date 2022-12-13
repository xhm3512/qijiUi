function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["title", "prefixCls", "onClose", "focusTriggerAfterClose", "onCancel", "centered", "closeIcon", "wrapClassName"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import { getTransitionName } from '../_util/motion';
import './style/index.less';
import { ConfigContext } from '../config-provider/context';
import QuiImgIcons from '../qui-img-icons';
var MoDalClose = QuiImgIcons.MoDalClose;
export default (function (props) {
  var title = props.title,
    customizePrefixCls = props.prefixCls,
    onClose = props.onClose,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    onCancel = props.onCancel,
    _props$centered = props.centered,
    centered = _props$centered === void 0 ? false : _props$centered,
    closeIcon = props.closeIcon,
    wrapClassName = props.wrapClassName,
    elseProps = _objectWithoutProperties(props, _excluded);
  var handleCancel = function handleCancel(e) {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(MoDalClose, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classNames(wrapClassName, _defineProperty({}, "".concat(prefixCls, "-centered"), !!centered));
  return /*#__PURE__*/React.createElement(Dialog, _objectSpread({
    wrapClassName: wrapClassNameExtended,
    prefixCls: prefixCls,
    focusTriggerAfterClose: focusTriggerAfterClose,
    onClose: handleCancel,
    closeIcon: closeIconToRender,
    transitionName: getTransitionName(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)
  }, elseProps));
});