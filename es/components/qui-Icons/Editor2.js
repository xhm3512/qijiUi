function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { paramIcon } from './params';
export default function Delete() {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({}, paramIcon), /*#__PURE__*/React.createElement("path", {
    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
  }));
  // return <svg {...param}><path d='M982.780724 1023.996587H41.215863A40.703864 40.703864 0 0 1 0 983.890054c0-22.186593 18.431939-40.106533 41.215863-40.106533h941.564861c22.783924 0 41.215863 17.91994 41.215863 40.106533s-18.431939 40.106533-41.215863 40.106533z m-215.892614-633.683221L575.571415 200.703331l105.983646-104.95965 191.99936 189.439368-106.239645 105.130317h-0.256zM418.13194 735.741548l-236.884544 40.703864 46.079846-229.716568 291.07103-289.279035L709.714968 447.145176 418.13194 735.826881v-0.085333z m538.878203-480.937064L712.445625 12.629291A44.543852 44.543852 0 0 0 682.323059 0a43.349189 43.349189 0 0 0-30.037233 12.629291l-490.665031 484.691718a38.91187 38.91187 0 0 0-12.629292 22.527925L90.96503 819.197269c-2.474658 12.799957 1.706661 25.855914 11.093296 35.157216a40.106533 40.106533 0 0 0 35.498549 11.349296l304.894983-52.138493a41.13053 41.13053 0 0 0 24.746585-11.349295l489.726367-486.569045a43.007857 43.007857 0 0 0 12.629291-29.269236 42.666524 42.666524 0 0 0-12.629291-29.269236v-2.303992z' fill='currentColor' p-id='882'></path></svg>
}