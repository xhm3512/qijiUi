function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import classNames from 'classnames';
import './style/index.less';
import QuiRow from '../../qui-row';
var ToolTip = function ToolTip(_ref) {
  var _classNames;
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var prefixCls = 'qiu-tooltip';
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-box"), active), _defineProperty(_classNames, "".concat(prefixCls, "-active-box"), !active), _classNames));
  return /*#__PURE__*/React.createElement(QuiRow, {
    justify: "center",
    align: "middle",
    className: classes
  }, "?");
};
export default ToolTip;