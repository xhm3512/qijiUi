"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserSvg;

var _react = _interopRequireDefault(require("react"));

var _params = require("./params");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UserSvg() {
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
    fillRule: "nonzero",
    transform: "translate(-48.000000, -370.000000)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(0.000000, 192.000000)",
    id: "\u7F16\u7EC4-45"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_data"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(6.000000, 5.000000)",
    id: "\u7F16\u7EC4"
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "\u8DEF\u5F84",
    d: "M16,15.7141784 L16,16.0665865 C16,17.7777778 13.1411256,17.7777778 9.83018752,17.7777778 L6.1693019,17.7777778 C2.72274915,17.7777778 0,17.7777778 0,16.0665865 L0,15.7141784 C0,12.4404601 2.76694767,9.77777778 6.1693019,9.77777778 L9.83018752,9.77777778 C13.2322975,9.77777778 16,12.4412194 16,15.7141784 Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    id: "\u8DEF\u5F84",
    d: "M13.3333333,4.88888889 C13.3333333,7.58490954 10.9408308,9.77777778 8,9.77777778 C5.05945886,9.77777778 2.66666667,7.5841426 2.66666667,4.88888889 C2.66666667,2.19338645 5.05945886,0 8,0 C10.9408308,0 13.3333333,2.19288896 13.3333333,4.88888889 Z"
  })))))))));
}