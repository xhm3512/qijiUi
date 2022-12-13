"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _rcTextarea = _interopRequireDefault(require("rc-textarea"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _type = require("../_util/type");
var React = _interopRequireWildcard(require("react"));
var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));
var _Input = require("./Input");
var _excluded = ["bordered", "showCount", "maxLength", "className", "style", "onCompositionStart", "onCompositionEnd", "onChange", "prefixCls", "status", "textErr"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var InputStatuses = (0, _type.tuple)('warning', 'error', '');
function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if (_toConsumableArray(preValue || '').length < triggerValue.length && _toConsumableArray(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var TextArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _classNames;
  var _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    _ref$showCount = _ref.showCount,
    showCount = _ref$showCount === void 0 ? false : _ref$showCount,
    maxLength = _ref.maxLength,
    className = _ref.className,
    style = _ref.style,
    onCompositionStart = _ref.onCompositionStart,
    onCompositionEnd = _ref.onCompositionEnd,
    onChange = _ref.onChange,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'qui-input' : _ref$prefixCls,
    customStatus = _ref.status,
    textErr = _ref.textErr,
    props = _objectWithoutProperties(_ref, _excluded);
  var innerRef = React.useRef(null);
  // const clearableInputRef = React.useRef<ClearableLabeledInput>(null);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    compositing = _React$useState2[0],
    setCompositing = _React$useState2[1];
  var oldCompositionValueRef = React.useRef();
  var oldSelectionStartRef = React.useRef(0);
  var _useMergedState = (0, _useMergedState3.default)(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var hidden = props.hidden;
  var handleSetValue = function handleSetValue(val, callback) {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  // =========================== Value Update ===========================
  // Max length value
  var hasMaxLength = Number(maxLength) > 0;
  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    // 拼音输入前保存一份旧值
    oldCompositionValueRef.current = value;
    // 保存旧的光标位置
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    setCompositing(false);
    var triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      var _oldCompositionValueR;
      var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_oldCompositionValueR = oldCompositionValueRef.current) === null || _oldCompositionValueR === void 0 ? void 0 : _oldCompositionValueR.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
  };
  // ============================== Reset ===============================
  var handleReset = function handleReset(e) {
    var _innerRef$current2, _innerRef$current2$re;
    handleSetValue('', function () {
      var _innerRef$current;
      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.focus();
    });
    (0, _Input.resolveOnChange)((_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 ? void 0 : (_innerRef$current2$re = _innerRef$current2.resizableTextArea) === null || _innerRef$current2$re === void 0 ? void 0 : _innerRef$current2$re.textArea, e, onChange);
  };
  React.useImperativeHandle(ref, function () {
    var _innerRef$current3;
    return {
      resizableTextArea: (_innerRef$current3 = innerRef.current) === null || _innerRef$current3 === void 0 ? void 0 : _innerRef$current3.resizableTextArea,
      focus: function focus(option) {
        var _innerRef$current4, _innerRef$current4$re;
        (0, _Input.triggerFocus)((_innerRef$current4 = innerRef.current) === null || _innerRef$current4 === void 0 ? void 0 : (_innerRef$current4$re = _innerRef$current4.resizableTextArea) === null || _innerRef$current4$re === void 0 ? void 0 : _innerRef$current4$re.textArea, option);
      },
      blur: function blur() {
        var _innerRef$current5;
        return (_innerRef$current5 = innerRef.current) === null || _innerRef$current5 === void 0 ? void 0 : _innerRef$current5.blur();
      }
    };
  });
  var textArea = /*#__PURE__*/React.createElement(_rcTextarea.default, _objectSpread(_objectSpread({}, (0, _omit.default)(props, ['allowClear'])), {}, {
    style: showCount ? undefined : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  var val = (0, _Input.fixControlledValue)(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  }
  // TextArea
  var textareaNode = /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-textarea-error"), !!textErr), _defineProperty(_classNames, "".concat(prefixCls, "-textarea-mormal"), !textErr), _classNames), className)
  }, /*#__PURE__*/React.createElement(_ClearableLabeledInput.default, _objectSpread(_objectSpread({}, props), {}, {
    prefixCls: prefixCls,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    // ref={clearableInputRef}
    bordered: bordered,
    status: customStatus,
    style: showCount ? undefined : style
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-err-text")
  }, textErr));
  // Only show text area wrapper when needed
  if (showCount) {
    var _classNames2;
    var valueLength = _toConsumableArray(val).length;
    var dataCount = '';
    if (_typeof(showCount) === 'object') {
      dataCount = showCount.formatter({
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }
    return /*#__PURE__*/React.createElement("div", {
      hidden: hidden,
      className: (0, _classnames.default)("".concat(prefixCls, "-textarea"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-textarea-error"), !!textErr), _defineProperty(_classNames2, "".concat(prefixCls, "-textarea-show-count"), showCount), _classNames2), className),
      style: style,
      "data-count": dataCount
    }, textareaNode);
  }
  return textareaNode;
});
var _default = TextArea;
exports.default = _default;