"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _quiSelect = _interopRequireDefault(require("../qui-select"));
var _quiRadio = require("../qui-radio");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Button = function Button(value) {
  return /*#__PURE__*/React.createElement("div", null, "button");
};
var YearSelectOffset = 10;
var YearSelectTotal = 20;
function YearSelect(props) {
  var fullscreen = props.fullscreen,
    validRange = props.validRange,
    generateConfig = props.generateConfig,
    locale = props.locale,
    prefixCls = props.prefixCls,
    value = props.value,
    _onChange = props.onChange,
    divRef = props.divRef;
  var year = generateConfig.getYear(value || generateConfig.getNow());
  var start = year - YearSelectOffset;
  var end = start + YearSelectTotal;
  if (validRange) {
    start = generateConfig.getYear(validRange[0]);
    end = generateConfig.getYear(validRange[1]) + 1;
  }
  var suffix = locale && locale.year === '年' ? '年' : '';
  var options = [];
  for (var index = start; index < end; index++) {
    options.push({
      label: "".concat(index).concat(suffix),
      value: index
    });
  }
  return /*#__PURE__*/React.createElement(_quiSelect.default, {
    size: fullscreen ? undefined : 'small',
    options: options,
    value: year,
    className: "".concat(prefixCls, "-year-select"),
    onChange: function onChange(numYear) {
      var newDate = generateConfig.setYear(value, numYear);
      if (validRange) {
        var _validRange = _slicedToArray(validRange, 2),
          startDate = _validRange[0],
          endDate = _validRange[1];
        var newYear = generateConfig.getYear(newDate);
        var newMonth = generateConfig.getMonth(newDate);
        if (newYear === generateConfig.getYear(endDate) && newMonth > generateConfig.getMonth(endDate)) {
          newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
        }
        if (newYear === generateConfig.getYear(startDate) && newMonth < generateConfig.getMonth(startDate)) {
          newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
        }
      }
      _onChange(newDate);
    },
    getPopupContainer: function getPopupContainer() {
      return divRef.current;
    }
  });
}
function MonthSelect(props) {
  var prefixCls = props.prefixCls,
    fullscreen = props.fullscreen,
    validRange = props.validRange,
    value = props.value,
    generateConfig = props.generateConfig,
    locale = props.locale,
    _onChange2 = props.onChange,
    divRef = props.divRef;
  var month = generateConfig.getMonth(value || generateConfig.getNow());
  var start = 0;
  var end = 11;
  if (validRange) {
    var _validRange2 = _slicedToArray(validRange, 2),
      rangeStart = _validRange2[0],
      rangeEnd = _validRange2[1];
    var currentYear = generateConfig.getYear(value);
    if (generateConfig.getYear(rangeEnd) === currentYear) {
      end = generateConfig.getMonth(rangeEnd);
    }
    if (generateConfig.getYear(rangeStart) === currentYear) {
      start = generateConfig.getMonth(rangeStart);
    }
  }
  var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
  var options = [];
  for (var index = start; index <= end; index += 1) {
    options.push({
      label: months[index],
      value: index
    });
  }
  return /*#__PURE__*/React.createElement(_quiSelect.default, {
    size: fullscreen ? undefined : 'small',
    className: "".concat(prefixCls, "-month-select"),
    value: month,
    options: options,
    onChange: function onChange(newMonth) {
      _onChange2(generateConfig.setMonth(value, newMonth));
    },
    getPopupContainer: function getPopupContainer() {
      return divRef.current;
    }
  });
}
function ModeSwitch(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    mode = props.mode,
    fullscreen = props.fullscreen,
    onModeChange = props.onModeChange;
  return /*#__PURE__*/React.createElement(_quiRadio.Group, {
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      onModeChange(value);
    },
    value: mode,
    className: "".concat(prefixCls, "-mode-switch")
  });
}
function CalendarHeader(props) {
  var prefixCls = props.prefixCls,
    fullscreen = props.fullscreen,
    mode = props.mode,
    onChange = props.onChange,
    onModeChange = props.onModeChange;
  var divRef = React.useRef(null);
  var sharedProps = _objectSpread(_objectSpread({}, props), {}, {
    onChange: onChange,
    fullscreen: fullscreen,
    divRef: divRef
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-header"),
    ref: divRef
  }, /*#__PURE__*/React.createElement(YearSelect, _objectSpread({}, sharedProps)), mode === 'month' && /*#__PURE__*/React.createElement(MonthSelect, _objectSpread({}, sharedProps)), /*#__PURE__*/React.createElement(ModeSwitch, _objectSpread(_objectSpread({}, sharedProps), {}, {
    onModeChange: onModeChange
  })));
}
var _default = CalendarHeader;
exports.default = _default;