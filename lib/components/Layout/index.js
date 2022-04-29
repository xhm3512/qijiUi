'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _Header = _interopRequireDefault(require('./Header'));

var _Content = _interopRequireDefault(require('./Content'));

var _Footer = _interopRequireDefault(require('./Footer'));

var _Sider = _interopRequireDefault(require('./Sider'));

var _Layout = _interopRequireDefault(require('./Layout'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// type LayoutComponents = {
//   Header
// }
var LayoutBox = _Layout.default;
LayoutBox.Header = _Header.default;
LayoutBox.Content = _Content.default;
LayoutBox.Footer = _Footer.default;
LayoutBox.Sider = _Sider.default;
LayoutBox.Header = _Header.default;
var _default = LayoutBox;
exports.default = _default;
