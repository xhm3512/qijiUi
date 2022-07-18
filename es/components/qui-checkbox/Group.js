var _excluded = ["children", "options", "disabled", "className", "onMouseEnter", "onMouseLeave", "onChange", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { useState } from 'react';
import omit from 'rc-util/lib/omit';
import QuiCheckbox from './CheckedBox';
export var GroupContext = /*#__PURE__*/React.createContext(null);
var CheckedBoxGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = useState(props.value || props.defaultValue || []),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var children = props.children,
      options = props.options,
      disabled = props.disabled,
      className = props.className,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onChange = props.onChange,
      style = props.style,
      restProps = _objectWithoutProperties(props, _excluded); // const domProps = omit(restProps, ['value', 'disabled']);


  var domProps = omit(restProps, ['value']);
  React.useEffect(function () {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  var getOptions = function getOptions() {
    return options === null || options === void 0 ? void 0 : options.map(function (option) {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          label: option,
          value: option
        };
      }

      return option;
    });
  };

  var renderGroup = function renderGroup() {
    var childrenToRender = children;

    if (options && options.length > 0) {
      var _getOptions;

      childrenToRender = (_getOptions = getOptions()) === null || _getOptions === void 0 ? void 0 : _getOptions.map(function (option) {
        return /*#__PURE__*/React.createElement(QuiCheckbox // prefixCls={prefixCls}
        , {
          // prefixCls={prefixCls}
          key: option.value.toString(),
          disabled: 'disabled' in option ? option.disabled : disabled,
          checked: (value === null || value === void 0 ? void 0 : value.indexOf(option.value)) !== -1,
          onChange: option.onChange,
          // className={`${groupPrefixCls}-item`}
          style: option.style,
          value: option.label
        }, option.label);
      });
    }

    return childrenToRender;
  };

  var toggleOption = function toggleOption(option) {
    var optionIndex = value === null || value === void 0 ? void 0 : value.indexOf(option.value);

    var newValue = _toConsumableArray(value);

    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }

    if (!('value' in restProps)) {
      setValue(newValue);
    }

    var opts = getOptions();
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue // .filter(val => registeredValues.indexOf(val) !== -1)
    .sort(function (a, b) {
      var indexA = (opts === null || opts === void 0 ? void 0 : opts.findIndex(function (opt) {
        return opt.value === a;
      })) || 0;
      var indexB = (opts === null || opts === void 0 ? void 0 : opts.findIndex(function (opt) {
        return opt.value === b;
      })) || 0;
      return indexA - indexB;
    }));
  }; // eslint-disable-next-line react/jsx-no-constructed-context-values


  var context = {
    toggleOption: toggleOption,
    value: value,
    disabled: disabled,
    name: restProps.name // https://github.com/ant-design/ant-design/issues/16376
    // registerValue,
    // cancelValue,

  };
  return /*#__PURE__*/React.createElement("div", _objectSpread(_objectSpread({}, domProps), {}, {
    ref: ref,
    style: style,
    className: className
  }), /*#__PURE__*/React.createElement(GroupContext.Provider, {
    value: context
  }, renderGroup()));
});
export default CheckedBoxGroup;