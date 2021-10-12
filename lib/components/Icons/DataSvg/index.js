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
        'M935.822222 782.734222H198.769778a136.988444 136.988444 0 0 1-136.760889-136.760889V38.115556h68.551111v607.971555c0 37.546667 30.549333 68.266667 68.266667 68.266667h736.881777c37.546667 0 68.266667-30.549333 68.266667-68.266667V38.115556h68.494222v607.971555a136.874667 136.874667 0 0 1-136.760889 136.647111z',
    }),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M1103.644444 68.494222H34.247111A34.247111 34.247111 0 0 1 34.247111 0h1069.283556a34.247111 34.247111 0 0 1 0.113777 68.494222zM360.789333 993.735111a34.304 34.304 0 0 1-29.866666-51.086222l115.825777-205.027556a34.304 34.304 0 0 1 59.733334 33.735111l-115.825778 204.970667a34.417778 34.417778 0 0 1-29.866667 17.408z m406.300445 0a34.417778 34.417778 0 0 1-29.866667-17.408l-115.768889-204.970667a34.360889 34.360889 0 0 1 59.733334-33.735111l115.768888 205.027556a34.360889 34.360889 0 0 1-29.866666 51.086222z m-533.162667-420.977778a34.190222 34.190222 0 0 1-25.770667-56.832l184.718223-211.057777a34.247111 34.247111 0 0 1 44.544-6.144l188.017777 122.652444 243.484445-216.917333a34.247111 34.247111 0 1 1 45.624889 51.086222l-263.111111 234.382222a34.417778 34.417778 0 0 1-41.528889 3.128889L424.96 372.337778 259.697778 561.152a34.304 34.304 0 0 1-25.770667 11.662222z',
    }),
  );
}
