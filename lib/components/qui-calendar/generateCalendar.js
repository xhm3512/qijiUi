"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _classnames = _interopRequireDefault(require("classnames"));
var _zh_CN = _interopRequireDefault(require("rc-picker/lib/locale/zh_CN"));
var _rcPicker = require("rc-picker");
var _context = require("../config-provider/context");
var _Header = _interopRequireDefault(require("./Header"));
require("rc-picker/assets/index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function generateCalendar(generateConfig) {
  function isSameYear(date1, date2) {
    return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
  }
  function isSameMonth(date1, date2) {
    return isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
  }
  function isSameDate(date1, date2) {
    return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
  }
  var Calendar = function Calendar(props) {
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      dateFullCellRender = props.dateFullCellRender,
      dateCellRender = props.dateCellRender,
      monthFullCellRender = props.monthFullCellRender,
      monthCellRender = props.monthCellRender,
      headerRender = props.headerRender,
      value = props.value,
      defaultValue = props.defaultValue,
      disabledDate = props.disabledDate,
      mode = props.mode,
      validRange = props.validRange,
      _props$fullscreen = props.fullscreen,
      fullscreen = _props$fullscreen === void 0 ? true : _props$fullscreen,
      onChange = props.onChange,
      onPanelChange = props.onPanelChange,
      onSelect = props.onSelect;
    var triggerModeChange = function triggerModeChange(newMode) {
      setMergedMode(newMode);
      triggerPanelChange(mergedValue, newMode);
    };
    // ====================== State =======================
    // Value
    var _useMergedState = (0, _useMergedState5.default)(function () {
        return value || generateConfig.getNow();
      }, {
        defaultValue: defaultValue,
        value: value
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setMergedValue = _useMergedState2[1];
    var today = generateConfig.getNow();
    // Mode
    var _useMergedState3 = (0, _useMergedState5.default)('month', {
        value: mode
      }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      mergedMode = _useMergedState4[0],
      setMergedMode = _useMergedState4[1];
    var panelMode = React.useMemo(function () {
      return mergedMode === 'year' ? 'month' : 'date';
    }, [mergedMode]);
    var _React$useContext = React.useContext(_context.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls('picker', customizePrefixCls);
    var calendarPrefixCls = "".concat(prefixCls, "-calendar");
    // Disabled Date
    var mergedDisabledDate = React.useCallback(function (date) {
      var notInRange = validRange ? generateConfig.isAfter(validRange[0], date) || generateConfig.isAfter(date, validRange[1]) : false;
      return notInRange || !!(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date));
    }, [disabledDate, validRange]);
    // ====================== Events ======================
    var triggerPanelChange = function triggerPanelChange(date, newMode) {
      onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(date, newMode);
    };
    var triggerChange = function triggerChange(date) {
      setMergedValue(date);
      if (!isSameDate(date, mergedValue)) {
        // Trigger when month panel switch month
        if (panelMode === 'date' && !isSameMonth(date, mergedValue) || panelMode === 'month' && !isSameYear(date, mergedValue)) {
          triggerPanelChange(date, mergedMode);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(date);
      }
    };
    var onInternalSelect = function onInternalSelect(date) {
      triggerChange(date);
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(date);
    };
    var monthRender = React.useCallback(function (date, locale) {
      if (monthFullCellRender) {
        return monthFullCellRender(date);
      }
      var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames.default)("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), _defineProperty({}, "".concat(calendarPrefixCls, "-date-today"), isSameMonth(today, date)))
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-value")
      }, months[generateConfig.getMonth(date)]), /*#__PURE__*/React.createElement("div", {
        className: "".concat(calendarPrefixCls, "-date-content")
      }, monthCellRender && monthCellRender(date)));
    }, [monthFullCellRender, monthCellRender]);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Header.default, {
      prefixCls: calendarPrefixCls,
      value: mergedValue,
      generateConfig: generateConfig,
      mode: mergedMode,
      fullscreen: fullscreen,
      locale: _zh_CN.default,
      validRange: validRange,
      onChange: onInternalSelect,
      onModeChange: triggerModeChange
    }), /*#__PURE__*/React.createElement(_rcPicker.PickerPanel, {
      value: mergedValue,
      prefixCls: prefixCls,
      locale: _zh_CN.default,
      // locale={mergedLocale.lang}
      generateConfig: generateConfig,
      // dateRender={dateRender}
      // monthCellRender={date => monthRender(date, mergedLocale.lang)}
      onSelect: onInternalSelect,
      mode: panelMode,
      picker: panelMode,
      disabledDate: mergedDisabledDate,
      hideHeader: true
    }));
  };
  return Calendar;
}
var _default = generateCalendar;
exports.default = _default;