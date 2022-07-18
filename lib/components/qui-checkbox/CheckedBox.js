"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ref = require("rc-util/lib/ref");

var _Group = require("./Group");

require("./style/index.less");

var _excluded = ["children", "style", "className", "indeterminate", "onMouseEnter", "onMouseLeave"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InternalCheckBox = function InternalCheckBox(props, ref) {
  var _classNames2;

  var innerRef = _react.default.useRef();

  var mergedRef = (0, _ref.composeRef)(ref, innerRef);

  var checkboxGroup = _react.default.useContext(_Group.GroupContext);

  var prefixCls = 'qui-checkbox';

  var children = props.children,
      style = props.style,
      className = props.className,
      indeterminate = props.indeterminate,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      restProps = _objectWithoutProperties(props, _excluded);

  var prevValue = _react.default.useRef(restProps.value);

  _react.default.useEffect(function () {
    if (restProps.value !== prevValue.current) {
      prevValue.current = restProps.value;
    }
  }, [restProps.value]);

  var checkboxProps = _objectSpread({}, restProps);

  if (checkboxGroup) {
    var _checkboxGroup$value;

    checkboxProps.onChange = function (args) {
      if (restProps.onChange) {
        restProps.onChange(args);
      }

      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };

    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value && ((_checkboxGroup$value = checkboxGroup.value) === null || _checkboxGroup$value === void 0 ? void 0 : _checkboxGroup$value.indexOf(restProps.value)) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }

  var checkboxClass = (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
  return /*#__PURE__*/_react.default.createElement("label", {
    style: style,
    className: (0, _classnames.default)("".concat(prefixCls, "-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty(_classNames2, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames2), className),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/_react.default.createElement(_rcCheckbox.default, _objectSpread(_objectSpread({
    ref: mergedRef
  }, checkboxProps), {}, {
    prefixCls: prefixCls,
    className: checkboxClass
  })), children !== undefined ? /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "-text")
  }, children) : null);
};

var CheckBox = /*#__PURE__*/_react.default.forwardRef(InternalCheckBox);

var _default = CheckBox;
exports.default = _default;