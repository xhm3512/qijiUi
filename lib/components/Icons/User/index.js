'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = UserSvg;

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

function UserSvg() {
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    _objectSpread({}, _params.paramsCheck),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M813.721028 339.048455A337.662987 337.662987 0 0 0 474.624445 0.003072a337.611787 337.611787 0 0 0-339.096583 339.045383c0 128.050816 67.839796 237.260088 173.31148 293.733519C161.793383 690.5354 55.092904 818.535016 26.31859 971.776157c-3.788789 18.841543 7.526377 41.471876 30.156709 45.260664h7.321578c18.841543 0 33.945498-11.315166 37.683087-30.207909 33.2799-175.922672 187.391438-304.843885 369.304492-308.837474h7.526378c180.889057 0 335.358994-154.418737 335.358994-338.942983h0.0512z m-602.878192 0A262.143214 262.143214 0 0 1 474.624445 75.266846a262.143214 262.143214 0 0 1 263.781609 263.679209c0 143.154771-116.838049 259.94162-260.04402 263.679209h-11.263966c-143.20597-7.526377-256.255231-124.313227-256.255232-263.679209z m523.774429 338.942983c0 22.630332 15.103955 37.683087 37.683087 37.683087h188.415435c22.579132 0 37.683087-15.052755 37.683087-37.683087 0-22.579132-15.103955-37.683087-37.683087-37.683087h-188.415435a37.836686 37.836686 0 0 0-37.683087 37.683087z m226.098522 109.260472h-301.413496c-22.630332 0-37.734287 15.052755-37.734287 37.683087s15.103955 37.683087 37.734287 37.683087h301.413496c22.579132 0 37.683087-15.052755 37.683087-37.683087s-15.103955-37.683087-37.683087-37.683087z m0 150.681148H663.03988c-22.630332 0-37.683087 15.103955-37.683087 37.683087 0 22.630332 15.052755 37.631887 37.683087 37.631887h297.675907c22.579132 0 37.683087-15.103955 37.683087-37.683087a37.785487 37.785487 0 0 0-37.683087-37.734286v0.102399z',
    }),
  );
}
