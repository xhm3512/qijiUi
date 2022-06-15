function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { homeMenuIcon } from './params';
export default function NewsSvg() {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    version: "1.1",
    viewBox: "0 0 28 28"
  }, homeMenuIcon), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd",
    fill: "none",
    strokeWidth: "1",
    stroke: "none",
    id: "\u9996\u9875"
  }, /*#__PURE__*/React.createElement("g", {
    id: "\u4FA7\u5BFC\u822A",
    transform: "translate(-48.000000, -418.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000000, 240.000000)",
    id: "\u7F16\u7EC4-46"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_cmt"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(6.000000, 7.000000)",
    id: "\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: "1.5",
    stroke: "currentColor",
    id: "\u77E9\u5F62",
    d: "M14,-0.75 C14.7593915,-0.75 15.4468915,-0.442195766 15.9445436,0.0554563517 C16.4421958,0.553108469 16.75,1.24060847 16.75,2 L16.75,2 L16.75,10 C16.75,10.7593915 16.4421958,11.4468915 15.9445436,11.9445436 C15.4468915,12.4421958 14.7593915,12.75 14,12.75 L14,12.75 L10.6070728,12.75 L8.18864662,15.3711898 L5.32000345,12.75 L2,12.75 C1.24060847,12.75 0.553108469,12.4421958 0.0554563517,11.9445436 C-0.442195766,11.4468915 -0.75,10.7593915 -0.75,10 L-0.75,10 L-0.75,2 C-0.75,1.24060847 -0.442195766,0.553108469 0.0554563517,0.0554563517 C0.553108469,-0.442195766 1.24060847,-0.75 2,-0.75 L2,-0.75 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "nonzero",
    fill: "currentColor",
    id: "\u8DEF\u5F84",
    d: "M4.45570651,7.00514221 C3.91025196,7.00514221 3.5466156,6.55059676 3.5466156,6.00514221 C3.5466156,5.45968767 4.00116106,5.00514221 4.5466156,5.00514221 C5.09207015,5.00514221 5.5466156,5.45968767 5.5466156,6.00514221 C5.45570651,6.55059676 5.00116106,7.00514221 4.45570651,7.00514221 L4.45570651,7.00514221 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "nonzero",
    fill: "currentColor",
    id: "\u8DEF\u5F84",
    d: "M8.5466156,7.00514221 C8.00116106,7.00514221 7.5466156,6.55059676 7.5466156,6.00514221 C7.5466156,5.45968767 8.00116106,5.00514221 8.5466156,5.00514221 C9.09207015,5.00514221 9.5466156,5.45968767 9.5466156,6.00514221 C9.5466156,6.55059676 9.09207015,7.00514221 8.5466156,7.00514221 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "nonzero",
    fill: "currentColor",
    id: "\u8DEF\u5F84",
    d: "M12.5466156,7.00514221 C12.0011611,7.00514221 11.5466156,6.55059676 11.5466156,6.00514221 C11.5466156,5.45968767 12.0011611,5.00514221 12.5466156,5.00514221 C13.0920701,5.00514221 13.5466156,5.45968767 13.5466156,6.00514221 C13.4557065,6.55059676 13.0011611,7.00514221 12.5466156,7.00514221 Z"
  })))))))));
}