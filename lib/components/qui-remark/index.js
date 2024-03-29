"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _shortCutKeySet = _interopRequireDefault(require("./shortCutKeySet"));
var _constants = require("./constants");
require("./style/index.less");
var _tools = require("./tools");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RemarkText = function RemarkText(props) {
  var text = props.text,
    manSpamWords = props.manSpamWords,
    machineWords = props.machineWords,
    onSubmitHtml = props.onSubmitHtml,
    manSpamHtml = props.manSpamHtml;
  var highlighRef = (0, _react.useRef)(null); //MouseEvent<HTMLDivElement, MouseEvent>
  var _useState = (0, _react.useState)('0'),
    _useState2 = _slicedToArray(_useState, 2),
    boxTop = _useState2[0],
    setBoxTop = _useState2[1];
  var _useState3 = (0, _react.useState)('0'),
    _useState4 = _slicedToArray(_useState3, 2),
    boxLeft = _useState4[0],
    setBoxLeft = _useState4[1];
  var _useState5 = (0, _react.useState)('0'),
    _useState6 = _slicedToArray(_useState5, 2),
    boxOpacity = _useState6[0],
    setopacity = _useState6[1];
  // 人审样式处理
  var poppleWordsDetail = function poppleWordsDetail() {
    var tempText = text;
    if (!manSpamWords) return tempText;
    Object.keys(manSpamWords).map(function (key) {
      var words = manSpamWords[key];
      if ((words === null || words === void 0 ? void 0 : words.length) > 0) {
        words.forEach(function (item) {
          if (!(0, _tools.isContainSpecial)(key, item)) return;
          var reg = new RegExp(item, 'g');
          if (key === 'line') {
            tempText = tempText.replace(reg, "<strike>".concat(item, "</strike>"));
          } else {
            tempText = tempText.replace(reg, "<font color=\"#ffffff\" style=\"background-color: ".concat(_constants.colorHight[key], ";\">").concat(item, "</font>"));
          }
        });
      }
    });
    return tempText;
  };
  // poppleWordsDetail
  //  机审样式处理
  var machineWordsDetail = function machineWordsDetail(text) {
    var tempText = text;
    if (machineWords) {
      Object.keys(machineWords).map(function (key) {
        var words = machineWords[key];
        if ((words === null || words === void 0 ? void 0 : words.length) > 0) {
          words.forEach(function (item) {
            if (!(0, _tools.isContainSpecial)(key, item)) return;
            var reg = new RegExp(item, 'g');
            if (key === 'line') {
              tempText = tempText.replace(reg, "<strike  data-check='1'>".concat(item, "</strike>"));
            } else {
              tempText = tempText.replace(reg, "<font color=".concat(_constants.colorHight16[key], ">").concat(item, "</font>"));
            }
          });
        }
      });
      return tempText;
    }
    return tempText;
  };
  /**
   *  // 敏感词分类整理
   * @param {*} tempWordsArr  处理后的所有敏感词
   * @returns
   */
  var classifyWords = function classifyWords(tempWordsArr) {
    var words = {
      high: [],
      middle: [],
      low: [],
      risk: [],
      line: []
    };
    tempWordsArr.forEach(function (item) {
      var tempText = item.text,
        type = item.type;
      if (type === 'STRIKE') {
        // 是人审划线标注
        var tempLine = words.line;
        if (tempLine.indexOf(tempText) < 0) tempLine.push(tempText); // 去重
      } else {
        // 是人审高亮标注
        var tempBackArr = words[type];
        if (tempBackArr) {
          // 去重
          if (tempBackArr.indexOf(tempText) < 0) tempBackArr.push(tempText);
        }
      }
    });
    return words;
  };
  // 找出敏感词
  var getWords = function getWords() {
    var current = highlighRef.current;
    var dom = current && current.getElementsByTagName('*');
    var filterDom = (0, _tools.filterDomFunc)(dom);
    var tempWordsArr = [];
    filterDom.forEach(function (item) {
      var text1 = item.innerText,
        offsetLeft = item.offsetLeft,
        offsetWidth = item.offsetWidth,
        type = item.type,
        offsetTop = item.offsetTop;
      var flag = true;
      tempWordsArr.forEach(function (tempWords, i) {
        if (offsetLeft === tempWords.offsetEnd && offsetTop === tempWords.offsetTop && tempWords.type === type) {
          // 表示是相邻两个统一类型的标志
          tempWordsArr[i] = {
            text: tempWords.text += text1,
            offsetLeft: tempWords === null || tempWords === void 0 ? void 0 : tempWords.offsetLeft,
            offsetWidth: offsetWidth + (tempWords === null || tempWords === void 0 ? void 0 : tempWords.offsetWidth),
            offsetEnd: offsetLeft + offsetWidth,
            offsetTop: offsetTop,
            type: type
          };
          flag = false;
        }
      });
      if (flag) {
        tempWordsArr[tempWordsArr.length] = {
          text: text1,
          offsetLeft: offsetLeft,
          offsetWidth: offsetWidth,
          offsetEnd: offsetLeft + offsetWidth,
          type: type,
          offsetTop: offsetTop,
          qqq: 'STRIKE'
        };
      }
    });
    return classifyWords(tempWordsArr);
  };
  /**
   * // 监听内容发生改变回调
   * @param {*} oldDomHtml
   * flag:是否是清楚操作
   */
  var onHightChange = function onHightChange(oldDomHtml) {
    var _highlighRef$current;
    var _oldDomHtml = oldDomHtml;
    var newDomHtml = (highlighRef === null || highlighRef === void 0 ? void 0 : (_highlighRef$current = highlighRef.current) === null || _highlighRef$current === void 0 ? void 0 : _highlighRef$current.innerHTML) || '';
    // 人审高危
    var highwordsArr = getWords();
    if (typeof onSubmitHtml === 'function') {
      onSubmitHtml({
        newDomHtml: newDomHtml,
        highwordsArr: highwordsArr,
        machineWords: machineWords
      });
    }
    _oldDomHtml = newDomHtml;
  };
  // 划线
  function strikeThrough() {
    var _highlighRef$current2;
    var current = highlighRef.current;
    if (current) current.contentEditable = 'true'; // 禁止输入设置
    var tempOldDomHtml = highlighRef === null || highlighRef === void 0 ? void 0 : (_highlighRef$current2 = highlighRef.current) === null || _highlighRef$current2 === void 0 ? void 0 : _highlighRef$current2.innerHTML;
    document.execCommand('strikeThrough', false);
    if (current) current.contentEditable = 'false';
    (0, _tools.clearSelection)();
    onHightChange(tempOldDomHtml);
  }
  // 清除样式
  function removeFormat() {
    var _highlighRef$current3;
    var current = highlighRef.current;
    if (current) current.contentEditable = 'true'; // 禁止输入设置
    var tempOldDomHtml = highlighRef === null || highlighRef === void 0 ? void 0 : (_highlighRef$current3 = highlighRef.current) === null || _highlighRef$current3 === void 0 ? void 0 : _highlighRef$current3.innerHTML;
    // 执行两次
    document.execCommand('removeFormat', false);
    document.execCommand('removeFormat', false);
    if (current) current.contentEditable = 'false';
    (0, _tools.clearSelection)();
    onHightChange(tempOldDomHtml);
  }
  // 设置颜色
  function setFontColor(value) {
    var _highlighRef$current4;
    var current = highlighRef.current;
    if (current) current.contentEditable = 'true'; // 禁止输入设置
    var tempOldDomHtml = highlighRef === null || highlighRef === void 0 ? void 0 : (_highlighRef$current4 = highlighRef.current) === null || _highlighRef$current4 === void 0 ? void 0 : _highlighRef$current4.innerHTML;
    // document.execCommand("forecolor", false, value);
    document.execCommand('forecolor', false, '#ffffff');
    document.execCommand('backColor', false, value);
    if (current) current.contentEditable = 'false';
    (0, _tools.clearSelection)();
    onHightChange(tempOldDomHtml);
  }
  // 鼠标回弹，获取元素选中位置
  function getDomSelectLOcal(e) {
    var _highlighRef$current5;
    var _ref = (highlighRef === null || highlighRef === void 0 ? void 0 : (_highlighRef$current5 = highlighRef.current) === null || _highlighRef$current5 === void 0 ? void 0 : _highlighRef$current5.getBoundingClientRect()) || {},
      width = _ref.width;
    try {
      var range = (0, _tools.selectDetail)().getRangeAt(0);
      if (range.toString() && width) {
        var _getMouseLOcal = (0, _tools.getMouseLOcal)(e),
          x = _getMouseLOcal.x,
          y = _getMouseLOcal.y;
        setBoxTop("".concat(y - 54, "px"));
        if (x < width && x > width - 160) {
          setBoxLeft("".concat(x - 160, "px"));
        } else {
          setBoxLeft("".concat(x + 10, "px"));
        }
        setopacity('1');
      } else {
        setopacity('0');
      }
    } catch (error) {
      setopacity('0');
    }
  }
  // 失去焦点弹窗隐藏
  var onMouseOutHandle = function onMouseOutHandle() {
    setTimeout(function () {
      setopacity('0');
    }, 400);
  };
  // 快捷键设置
  var setShortCutKeyFunc = function setShortCutKeyFunc(e) {
    (0, _shortCutKeySet.default)(e, function (obj) {
      var type = obj.type,
        color = obj.color;
      switch (type) {
        case 'high':
        case 'middle':
        case 'low':
        case 'risk':
          setFontColor(color);
          break;
        case 'line':
          strikeThrough();
          break;
        case 'clear':
          removeFormat();
          break;
        default:
      }
    }); // 设置快捷键
  };

  (0, _react.useEffect)(function () {
    var current = highlighRef.current;
    if (!current) return;
    var detailHtml = machineWordsDetail(poppleWordsDetail());
    // 初始化内容
    current.innerHTML = manSpamHtml || detailHtml;
    // 禁止输入设置
    current.addEventListener('keydown', function (e) {
      setShortCutKeyFunc(e); // 高亮快捷键设置
      // e.preventDefault();
    });

    if (typeof onSubmitHtml === 'function') {
      onSubmitHtml({
        newDomHtml: text,
        highwordsArr: manSpamWords,
        machineWords: machineWords
      });
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box-button-box",
    style: {
      top: boxTop,
      left: boxLeft,
      opacity: boxOpacity,
      zIndex: boxOpacity === '0' ? -1 : 9999
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box-button-inner"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn",
    type: "button",
    style: {
      background: '#D9001B'
    },
    onClick: function onClick() {
      return setFontColor(_constants.colorHight.high);
    }
  }, "\u9AD8", ' '), /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn",
    type: "button",
    style: {
      background: '#F59A23'
    },
    onClick: function onClick() {
      return setFontColor(_constants.colorHight.middle);
    }
  }, "\u4E2D", ' '), /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn",
    type: "button",
    style: {
      background: '#70B603'
    },
    onClick: function onClick() {
      return setFontColor(_constants.colorHight.low);
    }
  }, "\u4F4E", ' '), /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn",
    type: "button",
    style: {
      background: '#8400FF'
    },
    onClick: function onClick() {
      return setFontColor(_constants.colorHight.risk);
    }
  }, "\u98CE", ' '), /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn-img",
    type: "button",
    onClick: function onClick() {
      return removeFormat();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "hight-img",
    alt: "",
    src: "//imagev2.xmcdn.com/storages/fdf0-audiofreehighqps/05/38/CKwRIaIFIbPcAAACzQDlurYS.png"
  }), ' '), /*#__PURE__*/_react.default.createElement("button", {
    className: "hight-btn-img",
    type: "button",
    onClick: function onClick() {
      return strikeThrough();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "hight-img",
    alt: "",
    src: "//imagev2.xmcdn.com/storages/c1e0-audiofreehighqps/A7/C3/CKwRIRwFIbPcAAADfgDlurX-.png"
  }), ' '))), /*#__PURE__*/_react.default.createElement("div", {
    ref: highlighRef,
    className: "editableText",
    onMouseUp: function onMouseUp(e) {
      return getDomSelectLOcal(e);
    },
    // onBlur={onMouseOutHandle}
    tabIndex: 0,
    // outline={0}
    // hidefocus="true"
    contentEditable: "false",
    suppressContentEditableWarning: true,
    "data-test": "box"
  }));
};
var _default = RemarkText;
exports.default = _default;