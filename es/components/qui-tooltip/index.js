var _excluded = ["visible", "children", "prefixCls", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import RcTooltip from 'rc-tooltip';
import './style/index.less';
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
var Tooltip = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      children = props.children,
      customizePrefixCls = props.prefixCls,
      title = props.title,
      elseProps = _objectWithoutProperties(props, _excluded); // const prefixCls = 'qui-tooltip'


  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

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

  return /*#__PURE__*/React.createElement(RcTooltip, _objectSpread(_objectSpread({
    prefixCls: prefixCls,
    placement: "top",
    ref: ref
  }, elseProps), {}, {
    overlay: getOverlay(),
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), visible ? children : /*#__PURE__*/React.createElement(React.Fragment, null));
});
export default Tooltip;