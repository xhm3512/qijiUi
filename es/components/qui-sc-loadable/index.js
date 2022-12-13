/* eslint-disable no-unused-vars */
/*
 * @Description:异步加载通用组件
 * @Author: zf
 * @Date: 2019-12-30 18:38:01
 * @LastEditTime : 2019-12-30 20:28:35
 * @LastEditors  : zf
 */
import React from 'react';
import Loadable from 'react-loadable';
// 通用的过场组件
var loadingComponent = function loadingComponent() {
  return /*#__PURE__*/React.createElement("div", null, "loading");
};
// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (function (loader) {
  var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : loadingComponent;
  return Loadable({
    loader: loader,
    loading: loading
  });
});