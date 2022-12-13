function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "style", "className", "indeterminate", "onMouseEnter", "onMouseLeave"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import { GroupContext } from './Group';
import './style/index.less';
var InternalCheckBox = function InternalCheckBox(props, ref) {
  var _classNames2;
  var innerRef = React.useRef();
  var mergedRef = composeRef(ref, innerRef);
  var checkboxGroup = React.useContext(GroupContext);
  var prefixCls = 'qui-checkbox';
  var children = props.children,
    style = props.style,
    className = props.className,
    indeterminate = props.indeterminate,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    restProps = _objectWithoutProperties(props, _excluded);
  var prevValue = React.useRef(restProps.value);
  React.useEffect(function () {
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
  var checkboxClass = classNames(_defineProperty({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
  return /*#__PURE__*/React.createElement("label", {
    style: style,
    className: classNames("".concat(prefixCls, "-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty(_classNames2, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames2), className),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(RcCheckbox, _objectSpread(_objectSpread({
    ref: mergedRef
  }, checkboxProps), {}, {
    prefixCls: prefixCls,
    className: checkboxClass
  })), children !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-text")
  }, children) : null);
};
var CheckBox = /*#__PURE__*/React.forwardRef(InternalCheckBox);
export default CheckBox;