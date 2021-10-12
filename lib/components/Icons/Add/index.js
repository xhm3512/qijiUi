'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = NewSvg2;

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

function NewSvg2() {
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    _objectSpread({}, _params.paramsCheck),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M981.212547 316.810571a509.539181 509.539181 0 1 0-939.182617 395.402404 509.539181 509.539181 0 0 0 939.182617-395.402404z m-467.960783 632.847663c-239.992954 0-435.197414-195.153506-435.197414-435.146461 0-239.992954 195.20446-435.14646 435.14646-435.14646 239.992954 0 435.14646 195.153506 435.14646 435.14646 0 239.992954-195.153506 435.14646-435.14646 435.146461z m279.940826-435.146461a36.27919 36.27919 0 0 1-36.27919 36.27919h-207.382447v207.382447a36.27919 36.27919 0 0 1-72.558379 0v-207.382447H269.539174a36.27919 36.27919 0 1 1 0-72.558379h207.382446V270.901091a36.27919 36.27919 0 1 1 72.55838 0v207.382447h207.4334c20.02489 0 36.27919 16.2543 36.27919 36.279189z',
    }),
  );
}
