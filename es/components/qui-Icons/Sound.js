function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { paramIcon } from './params';
export default function Delete() {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({}, paramIcon), /*#__PURE__*/React.createElement("path", {
    d: 'M605.013333 0c25.770667 0 46.592 20.821333 46.592 46.506667v930.986666a46.506667 46.506667 0 0 1-93.013333 0V46.506667c0-25.6 20.821333-46.506667 46.506667-46.506667zM465.578667 232.704a46.506667 46.506667 0 0 0-93.098667 0v465.493333a46.506667 46.506667 0 0 0 93.013333 0V232.704zM93.013333 418.986667A46.506667 46.506667 0 0 0 0 418.986667v186.197333a46.506667 46.506667 0 0 0 93.013333 0V418.901333z m698.197334-139.605334c25.685333 0 46.506667 20.821333 46.506666 46.506667v372.394667a46.506667 46.506667 0 0 1-93.013333 0V325.802667c0-25.685333 20.736-46.506667 46.506667-46.506667zM1024 418.901333a46.506667 46.506667 0 0 0-93.013333 0v186.197334a46.506667 46.506667 0 0 0 93.013333 0V418.901333zM279.296 232.704a46.506667 46.506667 0 0 0-93.098667 0v558.592a46.506667 46.506667 0 0 0 93.013334 0V232.704z',
    fill: '#AAACB1',
    "p-id": '1038'
  }));
}