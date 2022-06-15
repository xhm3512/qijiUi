function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { homeMenuIcon } from './params';
export default function SalarySvg() {
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
    transform: "translate(-48.000000, -322.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 80.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 88.000000)",
    id: "\u7F16\u7EC4-28"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.000000, 144.000000)",
    id: "\u7F16\u7EC4-44"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(16.000000, 10.000000)",
    id: "icn_writting"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5.000000, 5.000000)",
    id: "\u7F16\u7EC4"
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: "1.5",
    stroke: "currentColor",
    id: "\u8DEF\u5F84",
    d: "M9,0 C4.02944318,0 0,4.02944318 0,9 C0,13.9705568 4.02944318,18 9,18 C13.9705568,18 18,13.9705568 18,9 C18,4.02944318 13.9705568,0 9,0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    id: "\u8DEF\u5F84",
    d: "M11.4541442,4 C11.2577233,3.99970999 11.0692945,4.08004818 10.9305865,4.22322389 L9.125,6.08207349 L7.31941346,4.22322389 C7.18069225,4.0800686 6.99227201,3.99973409 6.79585577,4 C6.49642802,4 6.22649044,4.18571588 6.11189329,4.47050678 C5.99729614,4.75529769 6.06060266,5.08311323 6.27229808,5.30111928 L7.86645192,6.94219024 L5.74038462,6.94219024 C5.33148148,6.94219024 5,7.28345011 5,7.70441549 C5,8.12538087 5.33148148,8.46664074 5.74038462,8.46664074 L8.38461538,8.46664074 L8.38461538,9.88220191 L5.74038462,9.88220191 C5.33148148,9.88220191 5,10.2234618 5,10.6444272 C5,11.0653925 5.33148148,11.4066524 5.74038462,11.4066524 L8.38461538,11.4066524 L8.38461538,14.2377748 C8.38461538,14.6587401 8.71609687,15 9.125,15 C9.53390313,15 9.86538462,14.6587401 9.86538462,14.2377748 L9.86538462,11.4066524 L12.5096154,11.4066524 C12.9185185,11.4066524 13.25,11.0653925 13.25,10.6444272 C13.25,10.2234618 12.9185185,9.88220191 12.5096154,9.88220191 L9.86538462,9.88220191 L9.86538462,8.46664074 L12.5096154,8.46664074 C12.9185185,8.46664074 13.25,8.12538087 13.25,7.70441549 C13.25,7.28345011 12.9185185,6.94219024 12.5096154,6.94219024 L10.3835481,6.94219024 L11.9775962,5.30111928 C12.189278,5.08312724 12.2525912,4.7553381 12.1380212,4.47055707 C12.0234512,4.18577604 11.7535527,4 11.4541442,4 L11.4541442,4 Z"
  })))))))));
}