'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

require('./style/index.css');

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var ToolTip = function ToolTip(_ref) {
  var _classNames;

  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var prefixCls = 'qiu-tooltip';
  var classes = (0, _classnames.default)(
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-box'), active),
    _defineProperty(_classNames, ''.concat(prefixCls, '-active-box'), !active),
    _classNames),
  );
  return /*#__PURE__*/ _react.default.createElement(
    _antd.Row,
    {
      justify: 'center',
      align: 'middle',
      className: classes,
    },
    '?',
  );
};

var _default = ToolTip;
exports.default = _default;
