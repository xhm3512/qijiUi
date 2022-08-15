"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcDrawer = _interopRequireDefault(require("rc-drawer"));

var _context = require("../config-provider/context");

var _type = require("../_util/type");

require("./style/index.less");

var _excluded = ["width", "height", "zIndex", "style", "size", "visible", "mask", "keyboard", "onClose", "children", "bodyStyle", "drawerStyle", "destroyOnClose", "className", "placement", "level", "closable", "maskClosable", "push", "prefixCls", "getContainer"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SizeTypes = (0, _type.tuple)('default', 'large');

function useForceUpdate() {
  var _React$useReducer = _react.default.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}

var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');

var DrawerContext = /*#__PURE__*/_react.default.createContext(null);

var defaultPushState = {
  distance: 180
};

var Drawer = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var width = _ref.width,
      height = _ref.height,
      zIndex = _ref.zIndex,
      style = _ref.style,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      visible = _ref.visible,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? true : _ref$mask,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onClose = _ref.onClose,
      children = _ref.children,
      bodyStyle = _ref.bodyStyle,
      drawerStyle = _ref.drawerStyle,
      destroyOnClose = _ref.destroyOnClose,
      className = _ref.className,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right' : _ref$placement,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? null : _ref$level,
      _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? 'true' : _ref$closable,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
      _ref$push = _ref.push,
      _push = _ref$push === void 0 ? defaultPushState : _ref$push,
      customizePrefixCls = _ref.prefixCls,
      customizeGetContainer = _ref.getContainer,
      rest = _objectWithoutProperties(_ref, _excluded);

  var forceUpdate = useForceUpdate();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      internalPush = _React$useState2[0],
      setPush = _React$useState2[1];

  var destroyClose = _react.default.useRef(false);

  var _React$useContext = _react.default.useContext(_context.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      getPopupContainer = _React$useContext.getPopupContainer;

  var parentDrawer = _react.default.useContext(DrawerContext);

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var isDestroyOnClose = destroyOnClose && !visible;

  var operations = _react.default.useMemo(function () {
    return {
      push: function push() {
        if (_push) {
          setPush(true);
        }
      },
      pull: function pull() {
        if (_push) {
          setPush(false);
        }
      }
    };
  }, [_push]);

  _react.default.useImperativeHandle(ref, function () {
    return operations;
  }, [operations]);

  (0, _react.useEffect)(function () {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    if (visible && parentDrawer) {
      parentDrawer.push();
    }

    return function () {
      if (parentDrawer) {
        parentDrawer.pull(); // parentDrawer = null;
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (parentDrawer) {
      if (visible) {
        parentDrawer.push();
      } else {
        parentDrawer.pull();
      }
    }
  }, [visible]); // get drawer push width or height

  var getPushTransform = function getPushTransform(_placement) {
    var distance;

    if (typeof _push === 'boolean') {
      distance = _push ? defaultPushState.distance : 0;
    } else {
      distance = _push.distance;
    }

    distance = parseFloat(String(distance || 0));

    if (_placement === 'left' || _placement === 'right') {
      return "translateX(".concat(_placement === 'left' ? distance : -distance, "px)");
    }

    if (_placement === 'top' || _placement === 'bottom') {
      return "translateY(".concat(_placement === 'top' ? distance : -distance, "px)");
    }
  };

  var getOffsetStyle = function getOffsetStyle() {
    if (!visible && !mask) {
      return {};
    }

    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      var defaultWidth = size === 'large' ? 736 : 378;
      offsetStyle.width = typeof width === 'undefined' ? defaultWidth : width;
    } else {
      var defaultHeight = size === 'large' ? 736 : 378;
      offsetStyle.height = typeof height === 'undefined' ? defaultHeight : height;
    }

    return offsetStyle;
  };

  var getRcDrawerStyle = function getRcDrawerStyle() {
    // 当无 mask 时，将 width 应用到外层容器上
    // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题
    var offsetStyle = mask ? {} : getOffsetStyle();
    return _objectSpread(_objectSpread({
      zIndex: zIndex,
      transform: internalPush ? getPushTransform(placement) : undefined
    }, offsetStyle), style);
  };

  var drawerClassName = (0, _classnames.default)(_defineProperty({
    'no-mask': !mask
  }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);

  var onDestroyTransitionEnd = function onDestroyTransitionEnd() {
    if (!isDestroyOnClose) {
      return;
    }

    if (!visible) {
      destroyClose.current = true;
      forceUpdate();
    }
  };

  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;

  var renderBody = function renderBody() {
    if (destroyClose.current && !visible) {
      return null;
    }

    destroyClose.current = false;
    var containerStyle = {};

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-wrapper-body"),
      style: _objectSpread(_objectSpread({}, containerStyle), drawerStyle),
      onTransitionEnd: onDestroyTransitionEnd
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, children));
  };

  var offsetStyle = mask ? getOffsetStyle() : {};
  return /*#__PURE__*/_react.default.createElement(DrawerContext.Provider, {
    value: operations
  }, /*#__PURE__*/_react.default.createElement(_rcDrawer.default, _objectSpread(_objectSpread(_objectSpread({
    handler: false
  }, _objectSpread({
    prefixCls: prefixCls,
    placement: placement,
    maskClosable: maskClosable,
    closable: closable,
    level: level,
    keyboard: keyboard,
    children: children
  }, rest)), offsetStyle), {}, {
    style: getRcDrawerStyle(),
    open: visible,
    showMask: mask,
    className: drawerClassName,
    getContainer: getContainer,
    onClose: onClose
  }), renderBody()));
});

Drawer.displayName = 'Drawer';
var _default = Drawer;
exports.default = _default;