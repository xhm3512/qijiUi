'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = CryingFaceSvg;

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

function CryingFaceSvg() {
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    _objectSpread({}, _params.paramsCheck),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M874.154667 149.845333c-200.123733-199.7824-524.1856-199.7824-724.309334 0-199.7824 200.123733-199.7824 524.1856 0 724.309334 200.123733 199.7824 524.1856 199.7824 724.309334 0 199.7824-200.123733 199.7824-524.1856 0-724.309334zM512 960.170667C264.6016 959.8976 64.1024 759.3984 63.829333 512 64.1024 264.6016 264.6016 64.1024 512 63.829333c247.3984 0.273067 447.8976 200.772267 448.170667 448.170667-0.273067 247.3984-200.772267 447.8976-448.170667 448.170667zM239.2064 398.336a53.418667 53.418667 0 1 1 106.8032 0 53.418667 53.418667 0 0 1-106.837333 0z m430.557867 0a53.418667 53.418667 0 1 1 106.837333 0 53.418667 53.418667 0 0 1-106.837333 0z m109.533866 330.478933a34.133333 34.133333 0 0 1-56.832 37.853867c-49.698133-74.274133-115.438933-120.9344-210.363733-120.9344-94.890667 0-160.6656 46.660267-210.363733 120.9344a34.133333 34.133333 0 0 1-56.832-37.853867c61.098667-91.409067 145.544533-151.313067 267.195733-151.313066s206.062933 59.904 267.195733 151.313066z',
      fill: '#000000',
      'p-id': '2637',
    }),
  );
}
