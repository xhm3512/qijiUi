"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorksManagerSvg;

var _react = _interopRequireDefault(require("react"));

var _params = require("./params");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WorksManagerSvg() {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({}, _params.paramIcon), /*#__PURE__*/_react.default.createElement("path", {
    d: 'M486.784 736.32l32.064 31.68 442.24-435.648a44.416 44.416 0 0 0 0-63.168 45.568 45.568 0 0 0-64.192 0L519.04 641.408l-377.6-372.352a45.504 45.504 0 0 0-64.128 0 44.416 44.416 0 0 0-0.064 63.232l407.872 402.176 1.792 1.792z',
    fill: '#3D3D3D',
    "p-id": '1281'
  }));
}