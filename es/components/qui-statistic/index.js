import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/row/style";
import _Row from "antd/es/row";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import classNames from 'classnames';
import "./style/index.css";

var Foo = function Foo(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      wrapClassName = _ref.wrapClassName,
      _ref$currentActive = _ref.currentActive,
      currentActive = _ref$currentActive === void 0 ? '' : _ref$currentActive;
  var prefixCls = 'qiji-oni-statistic';

  var _useState = useState(currentActive),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1]; // item样式


  var classesItem = function classesItem(index) {
    return classNames("".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-active"), index === activeIndex && active));
  }; // 点击item高亮


  var onHandleClick = function onHandleClick(i, type) {
    setActiveIndex(i);
    typeof onClick === 'function' && onClick(type);
  };

  return /*#__PURE__*/React.createElement(_Row, {
    className: wrapClassName,
    gutter: [16, 16]
  }, children === null || children === void 0 ? void 0 : children.map(function (item, i) {
    return /*#__PURE__*/React.createElement(_Col, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return onHandleClick(i + 1, item.key);
      },
      className: classesItem(i + 1)
    }, item));
  }));
};

export default Foo;