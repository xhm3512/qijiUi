'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj) {
            return typeof obj;
          }
        : function(obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

var _reactDom = _interopRequireDefault(require('react-dom'));

require('antd/es/date-picker/style/index.css');

require('./style/index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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

var Drawer = function Drawer(_ref) {
  var _classNames, _classNames2;

  var _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? false : _ref$maskClosable,
    children = _ref.children,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    onClose = _ref.onClose;
  var prefixCls = 'qiu-drawer-box1'; // 打开

  var onDialogOpen = function onDialogOpen() {
    // document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }; // 关闭

  var onDialogClose = function onDialogClose() {
    // document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };

  var classessDialog = (0, _classnames.default)(
    ''.concat(prefixCls, '-dialog'),
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-dialog_show'), visible),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-dialog_hidden'),
      !visible,
    ),
    _classNames),
  );
  var classessMask = (0, _classnames.default)(
    ''.concat(prefixCls, '-mask'),
    ((_classNames2 = {}),
    _defineProperty(_classNames2, ''.concat(prefixCls, '-mask-show'), visible),
    _defineProperty(
      _classNames2,
      ''.concat(prefixCls, '-mask-hidden'),
      !visible,
    ),
    _classNames2),
  );
  (0, _react.useEffect)(
    function() {
      if (visible) {
        onDialogOpen();
      } else {
        onDialogClose();
      }
    },
    [visible],
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _reactDom.default.createPortal(
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: prefixCls,
        },
        /*#__PURE__*/ _react.default.createElement('div', {
          className: classessMask,
          onClick: function onClick() {
            return maskClosable && onClose && onClose();
          },
        }),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: classessDialog,
          },
          children,
        ),
      ),
      document.body,
    ),
  );
};

var _default = Drawer;
exports.default = _default;
