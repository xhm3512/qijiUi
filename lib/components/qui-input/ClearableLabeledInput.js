"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormItemStatusContext = void 0;
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _reactNode = require("../_util/reactNode");
var _type = require("../_util/type");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ClearableInputType = (0, _type.tuple)('text', 'input');
var FormItemStatusContext = /*#__PURE__*/React.createContext({});
exports.FormItemStatusContext = FormItemStatusContext;
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  _inherits(ClearableLabeledInput, _React$Component);
  var _super = _createSuper(ClearableLabeledInput);
  function ClearableLabeledInput() {
    _classCallCheck(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  _createClass(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _classNames;
      var _this$props = this.props,
        value = _this$props.value,
        disabled = _this$props.disabled,
        readOnly = _this$props.readOnly,
        handleReset = _this$props.handleReset,
        suffix = _this$props.suffix;
      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(_CloseCircleFilled.default, {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(className, "-hidden"), !needClear), _defineProperty(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      var _classNames2;
      var _this$props2 = this.props,
        value = _this$props2.value,
        allowClear = _this$props2.allowClear,
        className = _this$props2.className,
        style = _this$props2.style,
        direction = _this$props2.direction,
        bordered = _this$props2.bordered,
        hidden = _this$props2.hidden,
        customStatus = _this$props2.status;
      var contextStatus = statusContext.status,
        hasFeedback = statusContext.hasFeedback;
      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }
      var affixWrapperCls = (0, _classnames.default)("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/React.createElement(FormItemStatusContext.Consumer, null, function (statusContext) {
        var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          inputType = _this$props3.inputType,
          element = _this$props3.element;
        if (inputType === ClearableInputType[0]) {
          return _this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput;
}(React.Component);
var _default = ClearableLabeledInput;
exports.default = _default;