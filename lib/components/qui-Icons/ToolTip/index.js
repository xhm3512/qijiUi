"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./style/index.less");
var _quiRow = _interopRequireDefault(require("../../qui-row"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ToolTip = function ToolTip(_ref) {
  var _classNames;
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var prefixCls = 'qiu-tooltip';
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-box"), active), _defineProperty(_classNames, "".concat(prefixCls, "-active-box"), !active), _classNames));
  return /*#__PURE__*/_react.default.createElement(_quiRow.default, {
    justify: "center",
    align: "middle",
    className: classes
  }, "?");
};
var _default = ToolTip;
exports.default = _default;