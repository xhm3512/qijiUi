"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rcDropdown = _interopRequireDefault(require("rc-dropdown"));
var _rcMenu = _interopRequireWildcard(require("rc-menu"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactNode = require("../_util/reactNode");
var _context = require("../config-provider/context");
require("./style/index.less");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function onSelect(_ref) {
  var key = _ref.key;
  console.log("".concat(key, " selected"));
}
var Placements = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom'];
var Dropdown = function Dropdown(props) {
  var customizePrefixCls = props.prefixCls,
    trigger = props.trigger,
    disabled = props.disabled,
    getPopupContainer = props.getPopupContainer,
    dropdownRender = props.dropdownRender,
    menu = props.menu,
    children = props.children;
  var _React$useContext = _react.default.useContext(_context.ConfigContext),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = _react.default.Children.only(children);
  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
      placement = _props$placement === void 0 ? '' : _props$placement,
      transitionName = props.transitionName;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return "".concat(rootPrefixCls, "-slide-down");
    }
    return "".concat(rootPrefixCls, "-slide-up");
  };
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;
  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }
  var dropdownTrigger = (0, _reactNode.cloneElement)(child, {
    className: (0, _classnames.default)("".concat(prefixCls, "-trigger"), child.props.className),
    disabled: disabled
  });
  var renderOverlay = function renderOverlay() {
    var overlay = props.overlay;
    var menuRender = function menuRender() {
      return /*#__PURE__*/_react.default.createElement(_rcMenu.default, {
        onSelect: onSelect,
        className: "".concat(prefixCls, "-menu")
      }, menu.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_rcMenu.Item, {
          key: item.key,
          disabled: item.disabled
        }, item.label);
      }));
    };
    var overlayNode;
    if (menu) {
      overlayNode = menuRender();
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = _react.default.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/_react.default.createElement("span", null, overlayNode) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, overlayNode));
    return overlayNode;
  };
  return /*#__PURE__*/_react.default.createElement(_rcDropdown.default, _objectSpread(_objectSpread({
    alignPoint: alignPoint
  }, props), {}, {
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    trigger: triggerActions,
    overlay: renderOverlay,
    animation: "slide-up",
    transitionName: getTransitionName()
  }), dropdownTrigger);
};
var _default = Dropdown;
exports.default = _default;