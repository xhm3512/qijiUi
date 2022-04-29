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
export default function WorksManagerSvg() {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _objectSpread(
      {
        viewBox: '0 0 28 28',
      },
      homeMenuIcon,
    ),
    /*#__PURE__*/ React.createElement(
      'g',
      {
        fillRule: 'evenodd',
        fill: 'none',
        strokeWidth: '1',
        stroke: 'none',
        id: '\u9996\u9875',
      },
      /*#__PURE__*/ React.createElement(
        'g',
        {
          strokeWidth: '1.5',
          stroke: 'currentColor',
          id: '\u4FA7\u5BFC\u822A',
          transform: 'translate(-48.000000, -226.000000)',
        },
        /*#__PURE__*/ React.createElement(
          'g',
          {
            transform: 'translate(16.000000, 80.000000)',
          },
          /*#__PURE__*/ React.createElement(
            'g',
            {
              transform: 'translate(16.000000, 88.000000)',
              id: '\u7F16\u7EC4-28',
            },
            /*#__PURE__*/ React.createElement(
              'g',
              {
                transform: 'translate(0.000000, 48.000000)',
                id: '\u8282\u76EE\u7BA1\u7406-normal',
              },
              /*#__PURE__*/ React.createElement(
                'g',
                {
                  transform: 'translate(16.000000, 10.000000)',
                  id: 'icn_jiemu',
                },
                /*#__PURE__*/ React.createElement('rect', {
                  rx: '1',
                  height: '6.5',
                  width: '6.5',
                  y: '5.75',
                  x: '5.75',
                  id: '\u77E9\u5F62',
                }),
                /*#__PURE__*/ React.createElement('rect', {
                  rx: '1',
                  height: '6.5',
                  width: '6.5',
                  y: '15.75',
                  x: '5.75',
                  id: '\u77E9\u5F62\u5907\u4EFD-2',
                }),
                /*#__PURE__*/ React.createElement('rect', {
                  rx: '1',
                  height: '6.5',
                  width: '6.5',
                  y: '5.75',
                  x: '15.75',
                  id: '\u77E9\u5F62\u5907\u4EFD',
                }),
                /*#__PURE__*/ React.createElement('rect', {
                  rx: '1',
                  height: '6.5',
                  width: '6.5',
                  y: '15.75',
                  x: '15.75',
                  id: '\u77E9\u5F62\u5907\u4EFD-3',
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
