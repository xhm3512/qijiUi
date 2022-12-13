"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CloseInput = function CloseInput(_ref) {
  var className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? undefined : _ref$style,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '1em' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '1em' : _ref$height;
  var prefixCls = 'qiji-oni-img-close';
  var classes = (0, _classnames.default)(prefixCls, className);
  return /*#__PURE__*/_react.default.createElement("img", {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height
    }),
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgBzVfdThNBFP5m2iW0iHAjgfBXUEF+hOKFXEgCPoH0TrwhPIG8gfAG8ATgBZJwU3wC4ULiT+RPrAoJ1KDhigQktFXojHMGtrLb3Xb5qfFLCLszp/N9c86Zs3MYPGJiIlpeVIx+7mO9EghzxkJSopzmGMOekDLOgGWRlvO/U5gdGorseVmX5TOYno6GBMOwz8cHTUJvkJNIy9GBgUgcFxFAOw5c488U6TAuASYxlkyIUTePOAqgXcPHX6nHEK4GcaTFQydvcPvAzEw0fMXk0GupNaem1No2WDxQgJ3bkeWJjACKeXEJXyogeUZE6lB0mTmRCQElnBt5bXWV/vP7/cgHsmkM1Wp7F4QCQc2loT1w6votJ+u2ltu42VCnn/f3D/D67SKOj4/hRt7Xcx/BYEC/f9nYxPrGlrOMtGigUGgPSM5H4IKqyorMc1lZKR5033P0BI3RnElOqKtx9QKottB/Ho1Gy1UlG3QzTCaSlncS0d7alGVH5DR3Fru77sWQcT5IeccTKfQjB94trmL/54FljHYW7mjNvIfvtmaR02/WYuuu66rYlxeVoN+vlPQhB46OjrGg4t7b041goNgiQkN9GOpqq7LIF94s4sglV0xwsF7OOTqRB1qEWjCRTFnGSYSdnGzef/iYl/xUe5iSMAQPSCSTjiLs5Cc2SXgDC/HzfOFMEU67++slr+QnecBxTlCBMRyOoWH4UVNdifOC02XCq3HzrUY0NzW4zt9pakRjfS28QuXAHnkg7sWYyqudnEJhD0d7W1OuMmyXEOdCiJV8ZrSgvfgQMcXcKSe6Ols9iWAcy1wyzOUyqqy4oRe0g4jpvOuC8ym74JDg66WlyAkh53nQwGyuPHCK+dJqzFIdt3/sYGklZrGhpOzqaEEupA4xyyORiLrRiuduRoZhZJFvf9/JsiMRa59tnmA57rxcTtKdQB9DlsaYmx3tjAoMxXkttuFIbmJzaxtf1efXTM7l1Zi7gCM5qrnN9xczL8fUy1P8A0iB8SePH518js3BgCFG4PFIXhLxX0nNBYsAygW6MBZYhL6Unu0RLKWYrkg+iAgKI0Kvbe8N/r/GhECGxYboUrV6HJcEJRxdw916RE/NqfTzEdXjDcIjqLClVW3h6nhfuDm146RxQb9kvE+JCSuS+rPtuXr+JplYVnNzVOG8tud/AFlrktaBHHJvAAAAAElFTkSuQmCC"
  });
};
var _default = CloseInput;
exports.default = _default;