"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorksManagerSvg;
var _react = _interopRequireDefault(require("react"));
var _params = require("./params");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function WorksManagerSvg() {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({
    viewBox: "0 0 28 28"
  }, _params.homeMenuIcon), /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd",
    fill: "none",
    strokeWidth: "1",
    stroke: "none",
    id: "\u9996\u9875"
  }, /*#__PURE__*/_react.default.createElement("g", {
    strokeWidth: "1.5",
    stroke: "currentColor",
    id: "\u4FA7\u5BFC\u822A",
    transform: "translate(-48.000000, -226.000000)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(0.000000, 48.000000)",
    id: "\u8282\u76EE\u7BA1\u7406-normal"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_jiemu"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    rx: "1",
    height: "6.5",
    width: "6.5",
    y: "5.75",
    x: "5.75",
    id: "\u77E9\u5F62"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    rx: "1",
    height: "6.5",
    width: "6.5",
    y: "15.75",
    x: "5.75",
    id: "\u77E9\u5F62\u5907\u4EFD-2"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    rx: "1",
    height: "6.5",
    width: "6.5",
    y: "5.75",
    x: "15.75",
    id: "\u77E9\u5F62\u5907\u4EFD"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    rx: "1",
    height: "6.5",
    width: "6.5",
    y: "15.75",
    x: "15.75",
    id: "\u77E9\u5F62\u5907\u4EFD-3"
  }))))))));
}