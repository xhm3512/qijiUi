function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import Select from '../qui-select';
import { Group } from '../qui-radio';

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

  var suffix = locale && locale.year === '???' ? '???' : '';
  var options = [];

  for (var index = start; index < end; index++) {
    options.push({
      label: "".concat(index).concat(suffix),
      value: index
    });
  }

  return /*#__PURE__*/React.createElement(Select, {
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

  return /*#__PURE__*/React.createElement(Select, {
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
  return /*#__PURE__*/React.createElement(Group, {
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

export default CalendarHeader;