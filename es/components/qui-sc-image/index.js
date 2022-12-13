function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "errNum", "lazyLoad", "defaultSrc", "src", "errDisplay", "errorCallback", "children", "alt"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './style/index.less';
var PuiImage = function PuiImage(props) {
  var className = props.className,
    errNum = props.errNum,
    lazyLoad = props.lazyLoad,
    defaultSrc = props.defaultSrc,
    src = props.src,
    errDisplay = props.errDisplay,
    errorCallback = props.errorCallback,
    children = props.children,
    alt = props.alt,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(defaultSrc || ''),
    _useState2 = _slicedToArray(_useState, 2),
    imgSrc = _useState2[0],
    setImgSrc = _useState2[1];
  // const [errorStateShow, setErrorStateShow] = useState<boolean>(true);
  var imgRef = useRef(null);
  // 判断元素是否在可视区
  var isInViewPort = function isInViewPort() {
    var _imgRef$current, _imgRef$current$getBo;
    var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return ((_imgRef$current = imgRef.current) === null || _imgRef$current === void 0 ? void 0 : (_imgRef$current$getBo = _imgRef$current.getBoundingClientRect()) === null || _imgRef$current$getBo === void 0 ? void 0 : _imgRef$current$getBo.top) <= viewPortHeight + 100;
  };
  var newImg = function newImg() {
    var Img = new Image();
    var errCount = 1;
    Img.src = src;
    Img.onload = function () {
      setImgSrc(src);
      Img = null;
    };
    Img.onerror = function (e) {
      if (typeof errorCallback == 'function') {
        errorCallback();
      } else {
        console.error('props errorCallback is not a function!!!');
      }
      // 等于失败次数，加载defaultSrc
      if (errCount >= errNum) {
        if (errDisplay) {
          // setErrorStateShow(false);
          return;
        }
        setImgSrc(defaultSrc || '');
        Img = null;
      } else {
        Img && (Img.src = src);
      }
      errCount++;
    };
  };
  // 滑动事件回调函数
  var handleScroll = function handleScroll() {
    if (isInViewPort()) {
      newImg();
      window.removeEventListener('scroll', handleScroll, true);
    } else {
      imgRef.current.src = defaultSrc || '';
    }
  };
  useEffect(function () {
    if (lazyLoad) {
      // 如果使用了懒加载，初始在可视区，直接加载图片
      if (isInViewPort()) {
        newImg();
      } else {
        // 如果使用了懒加载，初始不在可视区，监听滑动事件
        window.addEventListener('scroll', handleScroll, true);
        return function () {
          window.removeEventListener('scroll', handleScroll, true);
        };
      }
    } else {
      newImg();
    }
  }, []);
  var classes = classNames('pui-image', className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", _objectSpread(_objectSpread({
    ref: imgRef,
    className: classes
  }, restProps), {}, {
    src: imgSrc
  })), children);
};
PuiImage.defaultProps = {
  src: '',
  defaultSrc: '',
  lazyLoad: true,
  errNum: 1,
  errDisplay: false,
  errorCallback: function errorCallback() {}
};
export default PuiImage;