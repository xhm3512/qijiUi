var _excluded = ["children", "prefixCls", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import RcTooltip from 'rc-tooltip';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import './style/index.less';
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
import { isValidElement, cloneElement } from '../_util/reactNode';
var Tooltip = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
      customizePrefixCls = props.prefixCls,
      title = props.title,
      elseProps = _objectWithoutProperties(props, _excluded); // const prefixCls = 'qui-tooltip'


  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var _useMergedState = useMergedState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];

  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var arrowContentStyle = {
    'backgroundColor': 'rgba(0, 0, 0, 0.85)'
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;
    if (title === 0) return title;
    return overlay || title || '';
  };

  var child = isValidElement(children) ? children : /*#__PURE__*/React.createElement("span", null, children);

  var onVisibleChange = function onVisibleChange(vis) {
    var _props$onVisibleChang;

    setVisible(vis);
    (_props$onVisibleChang = props.onVisibleChange) === null || _props$onVisibleChang === void 0 ? void 0 : _props$onVisibleChang.call(props, vis);
  };

  return /*#__PURE__*/React.createElement(RcTooltip, _objectSpread(_objectSpread({}, elseProps), {}, {
    prefixCls: prefixCls,
    ref: ref,
    visible: visible,
    overlay: getOverlay(),
    onVisibleChange: onVisibleChange,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), visible ? cloneElement(child) : child);
});
Tooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1
};
export default Tooltip;