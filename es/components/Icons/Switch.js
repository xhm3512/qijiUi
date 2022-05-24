function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import React from 'react';
import { homeMenuIcon } from './params';
export default (function() {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _objectSpread(
      {
        viewBox: '0 0 1024 1024',
      },
      homeMenuIcon,
    ),
    /*#__PURE__*/ React.createElement('path', {
      fill: 'currentColor',
      d:
        'M19.370667 292.096L225.28 81.749333A59.477333 59.477333 0 0 1 309.76 81.152a59.050667 59.050667 0 0 1 0 84.053333L220.330667 253.781333c-3.413333 3.413333-4.437333 8.533333-2.56 12.970667a11.946667 11.946667 0 0 0 11.093333 7.253333h702.122667a59.733333 59.733333 0 0 1 60.074666 59.477334 59.733333 59.733333 0 0 1-60.074666 59.477333H62.464a60.074667 60.074667 0 0 1-55.296-36.352 59.050667 59.050667 0 0 1 12.202667-64.512z m691.968 650.496a59.050667 59.050667 0 0 1 0-84.053333l89.344-88.490667c3.413333-3.413333 4.437333-8.533333 2.56-12.970667a11.946667 11.946667 0 0 0-11.093334-7.338666H90.026667a59.733333 59.733333 0 0 1-60.074667-59.477334 59.733333 59.733333 0 0 1 60.074667-59.477333h876.373333c24.234667 0 46.08 14.506667 55.466667 36.693333 9.301333 22.186667 4.181333 47.786667-13.056 64.853334l-212.565334 210.261333a60.501333 60.501333 0 0 1-84.906666 0z',
      'p-id': '1403',
    }),
  );
});
