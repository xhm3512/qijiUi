"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchInput = function SearchInput(_ref) {
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
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKvSURBVHgB7VddbtpAEP5mnaRV1IccgZ6gcIImF4BYKqQmD4ETlJwAc4JyA+gD0EAlQy6Q5AShJyi9AU9VpeCd7rqC2sbYC23USs0nWYKdGe83s/OzBv53kIlSp+MdPX8h3oH5GEw5ZZULjAlzZp6y5Akxxo5jz7AlUgkMBl4OFnWU2jGMwF343NqGiNgk6I+8Bu2Je/PNNajGlrjvf/QaxhZJi4PRpAmGi98BwXXKpVaW2loEtOdJmzNwxyQvsS9fOpUS6ceCLACyrsQzrBu4JpGIRECfuQ47M45WCirRpE+t6ttiO+1F/dF1Q4CbYVtFek6+LKTlRCQCLIQb31ywPMnaXKNaLra1rrZZ2UO9a8/qpNmtCATeEy7CQu15pWJPYQitK0HRc1elq8sYWQR4D6cx2czE8zh0JFTobsNrB4doZBIgplJUJDMzeBMY/iSyibBeI5MAUT6y/QOMQx8HLTCOLDDnkEUgnHwa5+f2zgQSsj6HLAJ/C78iAP4aFgRzYEf0hl7kOHU/QBYBIvElYkRrVWEOH/nYymdkEZDSvwsLyLJK2BHCEs3IgpTjjbrLH4cHiNa8aiDbTLUlglkSSzp9V0AWAdu25/EGogq42et5eRhiqM5eIOa94K7xLMDCr8d7Oe2LG5NIaM8liZv4LMEDpzY0Wn/RdYOY3yfozqSvuqPEdNkjOqpSnqlkJaG7aPLFRQjUzt6UPsCUgMbgauIqSRN/CGkkEhuRc1ZymegyfBymSLKREt2rT5MLmBLQ0FONF7Kg+sHG8MUR3JoWq1uSEQmja7nuisG4ZnEqCK+Wifaze9JMldnt92+yXa/bK+8HQ6+m/Fu7jCiCdrVqj7cisCsSSahSd8rFk+XfRx1GTsXuxo9DfchEnH70aahJMEs7yA/1qEtqDU/4l/AD5VUjOxk0GY8AAAAASUVORK5CYII="
  });
};

var _default = SearchInput;
exports.default = _default;