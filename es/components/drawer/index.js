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

import React, { useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import 'antd/es/date-picker/style/index.css';
import './style/index.css';

var Drawer = function Drawer(_ref) {
  var _classNames, _classNames2;

  var _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? false : _ref$maskClosable,
    children = _ref.children,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    onClose = _ref.onClose,
    className = _ref.className;
  var prefixCls = 'qiu-drawer-box'; // 打开

  var onDialogOpen = function onDialogOpen() {
    // document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }; // 关闭

  var onDialogClose = function onDialogClose() {
    // document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };

  var classessDialog = classNames(
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
  var classessMask = classNames(
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
  useEffect(
    function() {
      if (visible) {
        onDialogOpen();
      } else {
        onDialogClose();
      }
    },
    [visible],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ ReactDOM.createPortal(
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classNames(prefixCls, className),
        },
        /*#__PURE__*/ React.createElement('div', {
          className: classessMask,
          onClick: function onClick() {
            return maskClosable && onClose && onClose();
          },
        }),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classessDialog,
          },
          visible && children,
        ),
      ),
      document.body,
    ),
  );
};

export default Drawer;
