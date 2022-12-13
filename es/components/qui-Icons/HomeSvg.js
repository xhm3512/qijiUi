function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { homeMenuIcon } from './params';
// 首页
export default function HomeSvg() {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    viewBox: "0 0 28 28"
  }, homeMenuIcon), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    fill: "none",
    strokeWidth: "1",
    stroke: "none",
    id: "\u9996\u9875"
  }, /*#__PURE__*/React.createElement("g", {
    strokeWidth: "1.5",
    stroke: "currentColor",
    id: "\u4FA7\u5BFC\u822A",
    fillRule: "nonzero",
    transform: "translate(-48.000000, -178.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_home"
  }, /*#__PURE__*/React.createElement("path", {
    id: "\u8DEF\u5F84",
    d: "M14.8593684,6.27559623 L21.0345263,10.6931931 C21.640513,11.1266954 22,11.8245878 22,12.5680436 L22,19.691846 C22,20.9665765 20.9631579,22 19.6842105,22 L16.5263158,22 L16.5263158,18.6426852 C16.5263158,17.2521273 15.3951579,16.124699 14,16.124699 C12.6048421,16.124699 11.4736842,17.2521273 11.4736842,18.6426852 L11.4736842,22 L8.31578947,22 C7.0368421,22 6,20.9665765 6,19.691846 L6,12.5682534 C6,11.8247236 6.35942665,11.1267386 6.96547368,10.6931931 L13.1406316,6.27559623 C13.6542316,5.90813459 14.3457684,5.90813459 14.8593684,6.27559623 Z"
  })))))));
}