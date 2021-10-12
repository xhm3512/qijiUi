'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = WorksManagerSvg;

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

function WorksManagerSvg() {
  return /*#__PURE__*/ _react.default.createElement(
    'svg',
    _objectSpread({}, _params.paramsCheck),
    /*#__PURE__*/ _react.default.createElement('path', {
      d:
        'M408.548163 468.17419H87.422565A61.747046 61.747046 0 0 1 25.67552 403.355152V81.615156C25.67552 47.464841 53.323451 19.81691 87.422565 19.81691H408.548163a61.747046 61.747046 0 0 1 64.819038 61.798246v321.739996A61.747046 61.747046 0 0 1 408.548163 468.17419z m0-386.559034H90.494558l3.68639 318.616803h314.367215V81.615156z m348.875927 402.635793a61.747046 61.747046 0 0 1-45.055887-18.534353L533.885449 287.233842a61.747046 61.747046 0 0 1 0-89.548576L711.753805 19.202512a61.747046 61.747046 0 0 1 89.548576 0l177.868355 178.482754a61.747046 61.747046 0 0 1 0 89.599776L801.251181 465.665396c-11.571171 11.775971-27.340732 18.431954-43.87829 18.534354zM585.187721 245.249947l172.287569 169.215577 171.109972-169.215577-171.109972-174.745163L585.187721 245.249947zM408.548163 986.316894H87.473765a61.747046 61.747046 0 0 1-61.747045-64.870238v-324.197589c0-34.099115 27.647931-61.747046 61.747045-61.747046H408.548163a61.747046 61.747046 0 0 1 64.819038 61.747046v321.739996a61.747046 61.747046 0 0 1-64.819038 67.327831z m0-386.559033l-318.002405 3.071992 3.68639 318.616803 314.367214-3.071992v-318.668003z m508.926727 386.559033h-321.791195a61.747046 61.747046 0 0 1-61.747046-64.870238v-324.197589c0-34.099115 27.647931-61.747046 61.747046-61.747046h321.739995c34.150315 0 61.798246 27.647931 61.798246 61.747046v321.739996a61.747046 61.747046 0 0 1-61.798246 67.327831z m-3.73759-389.067827l-318.053605 3.071992 3.73759 318.668004 314.367214-3.071993v-318.668003z',
    }),
  );
}
