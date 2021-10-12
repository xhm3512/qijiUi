'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isComponentClass = isComponentClass;
exports.isReactMemo = isReactMemo;
exports.default = void 0;

function isComponentClass(Component) {
  return Component.prototype && Component.prototype.render;
}

function isReactMemo(Component) {
  return typeof Component !== 'function' && !!Component['$$typeof'];
}

var _default = {
  isComponentClass: isComponentClass,
};
exports.default = _default;
