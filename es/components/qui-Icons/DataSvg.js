function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { homeMenuIcon } from './params';
export default function DataSvg() {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    viewBox: "0 0 28 28"
  }, homeMenuIcon), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    fill: "none",
    strokeWidth: "1",
    stroke: "none",
    id: "\u9996\u9875"
  }, /*#__PURE__*/React.createElement("g", {
    id: "\u4FA7\u5BFC\u822A",
    fillRule: "nonzero",
    fill: "currentColor",
    transform: "translate(-48.000000, -274.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000000, 96.000000)",
    id: "\u7F16\u7EC4-43"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_live"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5.000000, 5.000000)",
    id: "\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("path", {
    id: "\u5F62\u72B6",
    d: "M10.7129029,1.97224964 L10.7129029,7.2526929 L16.0063182,7.2526929 L15.9166714,6.94333117 C15.1602379,4.54859009 13.2058146,2.66730913 10.7398172,1.98028502 L10.7129029,1.97224964 Z M9.81785069,0.000169018055 L9.93117405,0.00800349677 C14.1534812,0.568671425 17.4793196,3.87643139 17.993322,8.03272643 L17.9983811,8.08656342 L18,8.14060127 C18,8.62968068 17.6006632,9.02618898 17.1079832,9.0262999 L9.95626708,9.0262999 C9.37689245,9.0262999 8.9072165,8.56005645 8.9072165,7.98491599 L8.9072165,0.89771983 C8.9072165,0.85787866 8.90999001,0.818084986 8.91531103,0.778595461 C8.98153713,0.2873659 9.43631024,-0.0576063072 9.93117405,0.00800349677 L9.81785069,0.000169018055 Z M7.87880696,0.89109065 C7.93470986,1.11025186 7.90059083,1.34248295 7.78396019,1.53666494 C7.66732954,1.73084694 7.47774747,1.8710628 7.256945,1.92644804 C4.02318183,2.73882393 1.71705135,5.64039596 1.71705135,8.99918053 C1.71705135,13.0281149 5.00707148,16.2942919 9.06586921,16.2942919 C12.4315732,16.2942919 15.3435789,14.0285185 16.1785293,10.841289 C16.2523014,10.5427344 16.4822693,10.306723 16.7804016,10.2235996 C17.0785339,10.1404762 17.3986586,10.2231143 17.6182324,10.4398801 C17.8378063,10.6566459 17.9228237,10.9739686 17.8407402,11.2703778 C16.8101047,15.2044948 13.2183611,18 9.06586921,18 C4.05859537,18 0,13.9706638 0,9.00038583 C0,4.85654564 2.84461883,1.27739104 6.836232,0.274777785 C7.29550508,0.159643606 7.76196678,0.435390058 7.87880696,0.89109065 Z"
  })))))))));
}