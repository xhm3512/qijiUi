import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/modal/style";
import _Modal from "antd/es/modal";
var _excluded = ["children", "footer", "okText", "wrapClassName", "cancelText", "visible", "onOk", "onCancel", "closeIcon", "loading", "isCancelBtn", "isOklBtn"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import QuiButton from '../qui-button';
import "./style/index.css";

var CloseInt = function CloseInt() {
  return /*#__PURE__*/React.createElement("img", {
    className: "close-img",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAatJREFUaEPtWEtOwzAQnThcA87TTVU2OAK6ZtnDsGQNQjEbqm56HrhGkyCLVDJV3LFnxgQLZ9n5+L1547HrCjL/qszxQyEwt4JFgaIAswKlhZgFZIf/HwWM2S46gCdbMjWoTdMs39nlcxK07e66r/pH+1MN8KD1ah+SP1iBV7P9AIDLMemhBrXWetmGLIL5GLNrOuifAeBi9P281asrLM7aqQRsrAiJCfA2tzyBUeI3p0psEh7wBzWom9AWDVbAovUtSGknqVxRBKRISIGP2gPuhuIA4MRObepoBY5JKEAoMdgkIhOIbacU4MktFNtOqcCLEMCUsPaTQ4o9ft0CslooQIlu9KkdX5ED8JhPjMAZJVyeouDFWmhCiZfvO9mPr6tB3Uvdn5Io4KiQJwHPtMmjhTzg89jE5+b8nx+jIYdUiA92ZfDZWWM0BliMbwwZMgEKIEoMRoZEgAOEEytynZYAIJGDdJBJLiyVK7iFsv9Tf/IuJHYl/rVnlewfttynxWFQm7vcnhaxeTyXPXgTzwUQW7cQwCqU2l4USF1hLH9RAKtQantRIHWFsfxfdKN9QFsChAsAAAAASUVORK5CYII="
  });
};

var QuiModal = function QuiModal(_ref) {
  var children = _ref.children,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? null : _ref$footer,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? '确认' : _ref$okText,
      wrapClassName = _ref.wrapClassName,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
      visible = _ref.visible,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      _ref$closeIcon = _ref.closeIcon,
      closeIcon = _ref$closeIcon === void 0 ? /*#__PURE__*/React.createElement(CloseInt, null) : _ref$closeIcon,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$isCancelBtn = _ref.isCancelBtn,
      isCancelBtn = _ref$isCancelBtn === void 0 ? true : _ref$isCancelBtn,
      _ref$isOklBtn = _ref.isOklBtn,
      isOklBtn = _ref$isOklBtn === void 0 ? true : _ref$isOklBtn,
      elseProps = _objectWithoutProperties(_ref, _excluded);

  var prefixCls = 'qiji-modal-box';
  return /*#__PURE__*/React.createElement(_Modal, _objectSpread({
    visible: visible,
    onOk: onOk,
    onCancel: onCancel,
    okText: okText,
    cancelText: cancelText,
    wrapClassName: classNames(prefixCls, wrapClassName),
    footer: footer,
    closeIcon: closeIcon
  }, elseProps), children, /*#__PURE__*/React.createElement(_Row, {
    align: "middle",
    justify: "end"
  }, isCancelBtn && /*#__PURE__*/React.createElement(QuiButton, {
    type: "secondary",
    onClick: onCancel,
    className: "button"
  }, "\u53D6\u6D88"), isOklBtn && /*#__PURE__*/React.createElement(QuiButton, {
    type: "primary",
    onClick: onOk,
    loading: loading,
    className: "button"
  }, "\u786E\u8BA4")));
};

export default QuiModal;