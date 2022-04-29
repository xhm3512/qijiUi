'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactLoadable = _interopRequireDefault(require('react-loadable'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable no-unused-vars */

/*
 * @Description:异步加载通用组件
 * @Author: zf
 * @Date: 2019-12-30 18:38:01
 * @LastEditTime : 2019-12-30 20:28:35
 * @LastEditors  : zf
 */
// 通用的过场组件
var loadingComponent = function loadingComponent() {
  return /*#__PURE__*/ _react.default.createElement('div', null, 'loading');
}; // 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件

var _default = function _default(loader) {
  var loading =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : loadingComponent;
  return (0, _reactLoadable.default)({
    loader: loader,
    loading: loading,
  });
};

exports.default = _default;
