var _excluded = ["children", "content", "prefixCls", "overlay"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import QuiTooltip from '../qui-tooltip';
import { ConfigContext } from '../config-provider/context';
import { getTransitionName } from '../_util/motion';
import './style/index.less';
var Popover = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      customizePrefixCls = _ref.prefixCls,
      overlay = _ref.overlay,
      elseProps = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();

  var getOverlay = function getOverlay(prefixCls) {
    if (!content) return undefined;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, content);
  };

  return /*#__PURE__*/React.createElement(QuiTooltip, _objectSpread({
    prefixCls: prefixCls,
    ref: ref,
    overlay: getOverlay(prefixCls),
    transitionName: getTransitionName(rootPrefixCls, 'zoom-big', elseProps === null || elseProps === void 0 ? void 0 : elseProps.transitionName)
  }, elseProps), children);
});
export default Popover;