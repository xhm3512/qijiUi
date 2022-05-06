'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

require('./style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var QuiTooltip = function QuiTooltip(_ref) {
  var children = _ref.children,
    title = _ref.title,
    placement = _ref.placement,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger;
  var prefixCls = 'qiji-oni-tooltip';
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Tooltip,
    {
      placement: placement,
      overlayClassName: prefixCls,
      title: title,
      trigger: trigger,
    },
    children,
  );
};

QuiTooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};
var _default = QuiTooltip;
exports.default = _default;
