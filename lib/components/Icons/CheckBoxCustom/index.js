'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = DataSvg;

var _react = _interopRequireDefault(require('react'));

var _params = require('../params');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
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

function DataSvg() {
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    _objectSpread({}, _params.paramsCheck),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M512 106.667A405.333 405.333 0 1 1 106.667 512 405.333 405.333 0 0 1 512 106.667m0-64A469.333 469.333 0 1 0 981.333 512 469.333 469.333 0 0 0 512 42.667z',
      'p-id': '1178',
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M311.253 512a200.747 200.747 0 1 0 401.707 0 200.747 200.747 0 0 0-401.707 0z',
      'p-id': '1179',
    }),
  );
}
