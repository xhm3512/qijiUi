"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireWildcard(require("react"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

var _classnames = _interopRequireDefault(require("classnames"));

require("braft-editor/dist/index.css");

require("./style/index.css");

var _excluded = ["type", "id", "maxLength", "onChange", "prohibitedWords", "contentStyle", "placecolor", "isMaxActive"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var dislodgeEmpty = function dislodgeEmpty(str) {
  return str.replace(/\s+/g, '').replace(/[\n|\r|\r\n]/g, '');
};

function _default(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'textArea' : _props$type,
      id = props.id,
      maxLength = props.maxLength,
      onChange = props.onChange,
      prohibitedWords = props.prohibitedWords,
      contentStyle = props.contentStyle,
      placecolor = props.placecolor,
      isMaxActive = props.isMaxActive,
      aaa = _objectWithoutProperties(props, _excluded); // const raftEditorClass = {
  //   err: 'raftEditor-box-err',
  //   normal: 'raftEditor-box-normal'
  // }


  var prohibitedWordsTip = function prohibitedWordsTip(prohibitedWords) {
    // return `请删除修改如上敏感词后再次提交发布：${prohibitedWords.replace(new RegExp(',', 'g'), '、').replace(new RegExp('&&', 'g'), '..')}`
    return "\u8BF7\u5220\u9664\u4FEE\u6539\u5982\u4E0A\u8BCD\u7EC4\uFF1A".concat(prohibitedWords.replace(new RegExp(',', 'g'), '、').replace(new RegExp('&&', 'g'), '..'));
  }; // const classes = classNames('tool-tip', raftEditorClass[prohibitedWords ? 'err' : 'normal']);//有违禁词，框框变红逻辑


  var classes = (0, _classnames.default)('tool-tip', 'raftEditor-box-normal', placecolor);
  var isString = typeof props.value === 'string' && props.value != '';
  var tempValue = '';

  try {
    tempValue = isString ? props.value.replace(/\n/g, '<br/>') : props.value || '';
  } catch (error) {
    console.log(error, '富文本编辑框组件异常');
  }

  var _useState = (0, _react.useState)(_braftEditor.default.createEditorState(tempValue || '', {
    editorId: id
  })),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1]; // 设置编辑器初始内容)


  var handleEditorChange = function handleEditorChange(editorStateValue) {
    // onChange(dislodgeEmpty(editorStateValue.toText()))
    onChange(editorStateValue.toText()); // editorState.isEmpty() 判断内容是否为空
    // editorState.toText()获取没有标签的文本

    setEditorState(editorStateValue);
  };

  var currentTextLength = dislodgeEmpty(editorState.toText()).length;

  if (type === 'textArea') {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: 'raftEditor-box ' + classes,
      style: contentStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "data-count-box"
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: "".concat(currentTextLength > maxLength && isMaxActive ? 'rgba(250, 40, 0, 1)' : '#222')
      }
    }, maxLength ? "".concat(currentTextLength) : ''), maxLength ? "/".concat(maxLength) : ''), /*#__PURE__*/_react.default.createElement(_braftEditor.default, _objectSpread(_objectSpread({}, aaa), {}, {
      maxLength: true,
      contentStyle: contentStyle,
      onChange: handleEditorChange,
      defaultValue: editorState,
      stripPastedStyles: true
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "prohibiti-words-top-box"
    }, prohibitedWords && prohibitedWordsTip(prohibitedWords)));
  } else if (type === 'input') {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: 'raftEditor-box raftEditor-box-input ' + classes,
      style: contentStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "data-count-box"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "current-data-length"
    }, maxLength ? "".concat(currentTextLength) : ''), maxLength ? "/".concat(maxLength) : ''), /*#__PURE__*/_react.default.createElement(_braftEditor.default, _objectSpread(_objectSpread({}, aaa), {}, {
      maxLength: true,
      contentStyle: contentStyle,
      onChange: handleEditorChange,
      defaultValue: editorState,
      stripPastedStyles: true
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "prohibiti-words-top-box"
    }, prohibitedWords && prohibitedWordsTip(prohibitedWords)));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }
}