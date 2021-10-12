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

import React from 'react';
import { paramsCheck } from '../params';
export default function NewsSvg() {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _objectSpread({}, paramsCheck),
    /*#__PURE__*/ React.createElement('path', {
      d:
        'M509.367345 979.675429c-58.514286 0-115.95581-9.801143-171.154286-29.257143l-0.243809-0.146286A34.718476 34.718476 0 0 1 316.952869 905.703619a35.84 35.84 0 0 1 45.446095-21.211429c47.299048 16.579048 96.841143 25.014857 147.017143 25.014858 51.590095 0 102.4-8.825905 150.966857-26.428953l0.877714-0.341333a35.888762 35.888762 0 0 1 45.689905 20.772571l0.097524 0.195048a34.718476 34.718476 0 0 1-1.219048 26.672762 34.864762 34.864762 0 0 1-19.651048 18.18819 516.388571 516.388571 0 0 1-176.761904 31.110096z m-317.44-148.72381C126.440107 830.902857 73.143345 778.24 73.143345 713.532952v-4.388571a115.809524 115.809524 0 0 1 74.118095-108.544l7.753143-3.023238V417.206857c0-87.235048 32.572952-170.959238 91.818667-235.861333a358.302476 358.302476 0 0 1 225.475047-114.785524l10.922667-1.219048V28.867048a28.91581 28.91581 0 0 1 57.734095 0v36.473904l10.922667 1.219048a357.229714 357.229714 0 0 1 225.28 114.785524 349.671619 349.671619 0 0 1 91.672381 235.861333v180.46781l7.801904 3.072c21.942857 8.533333 40.569905 23.259429 53.881905 42.715428 13.360762 19.504762 20.333714 42.22781 20.333714 65.682286v4.388571c0 31.061333-12.141714 60.318476-34.230857 82.407619a118.54019 118.54019 0 0 1-84.358095 35.011048H191.976107z m-18.090667-167.058286a48.469333 48.469333 0 0 0-30.329905 45.494857v4.144762c-0.195048 26.819048 21.357714 48.859429 48.274286 49.200762H831.878583c12.580571-0.097524 24.380952-4.924952 33.353143-13.653333 9.411048-9.216 14.872381-22.089143 14.726095-35.303619l0.146286-4.291048a48.420571 48.420571 0 0 0-30.183619-45.446095l-51.687619-20.48V417.255619c0-156.964571-128.438857-284.623238-286.378667-284.623238-157.988571 0-286.378667 127.658667-286.378667 284.623238V643.657143l-51.687619 20.284952z',
    }),
  );
}
