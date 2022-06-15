function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';

var ModalClose = function ModalClose(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? undefined : _ref$style,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '1em' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '1em' : _ref$height;
  var prefixCls = 'qiji-oni-img-close';
  var classes = classNames(prefixCls, className);
  return /*#__PURE__*/React.createElement("img", {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height
    }),
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAatJREFUaEPtWEtOwzAQnThcA87TTVU2OAK6ZtnDsGQNQjEbqm56HrhGkyCLVDJV3LFnxgQLZ9n5+L1547HrCjL/qszxQyEwt4JFgaIAswKlhZgFZIf/HwWM2S46gCdbMjWoTdMs39nlcxK07e66r/pH+1MN8KD1ah+SP1iBV7P9AIDLMemhBrXWetmGLIL5GLNrOuifAeBi9P281asrLM7aqQRsrAiJCfA2tzyBUeI3p0psEh7wBzWom9AWDVbAovUtSGknqVxRBKRISIGP2gPuhuIA4MRObepoBY5JKEAoMdgkIhOIbacU4MktFNtOqcCLEMCUsPaTQ4o9ft0CslooQIlu9KkdX5ED8JhPjMAZJVyeouDFWmhCiZfvO9mPr6tB3Uvdn5Io4KiQJwHPtMmjhTzg89jE5+b8nx+jIYdUiA92ZfDZWWM0BliMbwwZMgEKIEoMRoZEgAOEEytynZYAIJGDdJBJLiyVK7iFsv9Tf/IuJHYl/rVnlewfttynxWFQm7vcnhaxeTyXPXgTzwUQW7cQwCqU2l4USF1hLH9RAKtQantRIHWFsfxfdKN9QFsChAsAAAAASUVORK5CYII="
  });
};

export default ModalClose;