"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMouseLOcal = exports.filterDomFunc = exports.clearSelection = void 0;
exports.getStyle = getStyle;
exports.isContainSpecial = void 0;
exports.selectDetail = selectDetail;

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearSelection = function clearSelection() {
  var _document$getSelectio;

  (_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.empty();
}; // 获取鼠标在页面的位置


exports.clearSelection = clearSelection;

var getMouseLOcal = function getMouseLOcal(_e) {
  var e = _e || window.event;
  return {
    x: e.clientX,
    y: e.clientY
  };
};
/**
 *
 * @param {*} obj  当前操作dom
 * @param {*} attr  当前后去属性
 * @returns
 */


exports.getMouseLOcal = getMouseLOcal;

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    // 兼容IE
    return obj.currentStyle[attr];
  }

  return getComputedStyle(obj, null)[attr];
}
/**
 * 获得style样式
 * @param {*} item  dom
 * @returns  样式
 */


var getDomBgColor = function getDomBgColor(item) {
  var styleBack = item.nodeName && item.nodeName !== '#text' && (item.getAttribute('style') || item.nodeName === 'STRIKE');

  if (styleBack) {
    return {
      backColor: _constants.colorRgbHight[getStyle(item, 'background-color')],
      styleLineThrough: getStyle(item, 'text-decoration-line') === 'line-through' || item.nodeName === 'STRIKE' ? 'STRIKE' : ''
    };
  }

  return {};
};

var domRecursion = function domRecursion(item, tempArr) {
  var _getDomBgColor = getDomBgColor(item),
      backColor = _getDomBgColor.backColor,
      styleLineThrough = _getDomBgColor.styleLineThrough;

  var offsetLeft = item.offsetLeft,
      offsetWidth = item.offsetWidth,
      innerText = item.innerText,
      offsetTop = item.offsetTop;
  var tempPush = {
    offsetLeft: offsetLeft,
    offsetWidth: offsetWidth,
    innerText: innerText,
    offsetTop: offsetTop
  };

  if (backColor) {
    tempArr.push(_objectSpread(_objectSpread({}, tempPush), {}, {
      type: backColor
    }));
  }

  if (styleLineThrough) {
    tempArr.push(_objectSpread(_objectSpread({}, tempPush), {}, {
      type: styleLineThrough
    }));
  }
};
/**
 *  // 过滤数据，活得人审数据
 * @param {*} dom :获取到的所有标签
 * @returns
 */


var filterDomFunc = function filterDomFunc(dom) {
  var tempArr = [];

  try {
    [].slice.call(dom).forEach(function (item) {
      var dataCheck = item.getAttribute('data-check');

      var _getDomBgColor2 = getDomBgColor(item),
          backColor = _getDomBgColor2.backColor,
          styleLineThrough = _getDomBgColor2.styleLineThrough; // 过滤标注节点


      if (item.nodeName !== 'P' && dataCheck !== '1' && (backColor || item.nodeName === 'STRIKE' || styleLineThrough === 'line-through')) {
        domRecursion(item, tempArr);
      }
    });
  } catch (error) {
    console.log('filterDomFunc异常', error);
  }

  return tempArr;
}; // 兼容性处理


exports.filterDomFunc = filterDomFunc;

function selectDetail() {
  if (window.getSelection) {
    // 一般浏览器
    return window.getSelection();
  }

  var _docment = document;

  if (_docment.selection) {
    // IE浏览器、Opera
    return _docment.selection.createRange();
  }

  return null;
}
/**
 * // 是否包含特殊字符,有特殊字符的敏感词就不会展示高亮
 * @param {*} i  当前操作的标注类型
 * @param {*} string  当前需要匹配的字符串
 * @returns
 */


var isContainSpecial = function isContainSpecial(i, string) {
  var colorAll = {
    high: 'rgb(217, 0, 27)',
    middle: 'rgb(245, 154, 35)',
    low: 'rgb(112, 182, 3)',
    risk: 'rgb(132, 0, 255)'
  };
  var color = colorAll[i];
  var regOne = "<font color=\"#ffffff\" style=\"\"><span style=\"background-color: ".concat(color, ";\"></span></font>");
  var regTwo = "<span style=\"background-color: ".concat(color, ";\"><font color=\"#ffffff\">.*<\\/font></span>");
  var regThree = "<font color=\"#ffffff\" style=\"background-color: ".concat(color, ";\"><font</font>|<span</span></font>");
  var regFour = "<font style=\"background-color: ".concat(color, ";\" color=\"#ffffff\"><font</font>|<span</span></font>");
  var regFive = '<p></p>';
  var regSix = '<strike></strike>';

  if (regOne.match(string) || regTwo.match(string) || regThree.match(string) || regFour.match(string) || regFive.match(string) || regSix.match(string)) {
    return false;
  }

  return true;
};

exports.isContainSpecial = isContainSpecial;