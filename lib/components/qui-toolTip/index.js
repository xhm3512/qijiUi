"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

require("./style/index.css");

var _excluded = ["children", "title", "placement", "trigger", "overlayClassName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuiTooltip = function QuiTooltip(_ref) {
  var children = _ref.children,
      title = _ref.title,
      placement = _ref.placement,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
      overlayClassName = _ref.overlayClassName,
      elseParams = _objectWithoutProperties(_ref, _excluded);

  var prefixCls = 'qiji-oni-tooltip';
  return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    placement: placement,
    overlayClassName: (0, _classnames.default)(prefixCls, overlayClassName),
    title: title,
    trigger: trigger
  }, children);
};

QuiTooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
var _default = QuiTooltip;
exports.default = _default;