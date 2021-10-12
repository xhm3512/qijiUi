var _excluded = [
  'type',
  'id',
  'maxLength',
  'onChange',
  'prohibitedWords',
  'contentStyle',
  'placecolor',
  'isMaxActive',
];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import classNames from 'classnames';
import 'braft-editor/dist/index.css'; // import text from './text';

import './index.css';

var dislodgeEmpty = function dislodgeEmpty(str) {
  return str.replace(/\s+/g, '').replace(/[\n|\r|\r\n]/g, '');
};

export default function(props) {
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
    return '\u8BF7\u5220\u9664\u4FEE\u6539\u5982\u4E0A\u8BCD\u7EC4\uFF1A'.concat(
      prohibitedWords
        .replace(new RegExp(',', 'g'), '、')
        .replace(new RegExp('&&', 'g'), '..'),
    );
  }; // const classes = classNames('tool-tip', raftEditorClass[prohibitedWords ? 'err' : 'normal']);//有违禁词，框框变红逻辑

  var classes = classNames('tool-tip', 'raftEditor-box-normal', placecolor);
  var isString = typeof props.value === 'string' && props.value != '';
  var tempValue = '';

  try {
    tempValue = isString
      ? props.value.replace(/\n/g, '<br/>')
      : props.value || '';
  } catch (error) {
    console.log(error, '富文本编辑框组件异常');
  }

  var _useState = useState(
      BraftEditor.createEditorState(tempValue || '', {
        editorId: id,
      }),
    ),
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
    return /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'raftEditor-box ' + classes,
          style: contentStyle,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'data-count-box',
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              style: {
                color: ''.concat(
                  currentTextLength > maxLength && isMaxActive
                    ? 'rgba(250, 40, 0, 1)'
                    : '#222',
                ),
              },
            },
            maxLength ? ''.concat(currentTextLength) : '',
          ),
          maxLength ? '/'.concat(maxLength) : '',
        ),
        /*#__PURE__*/ React.createElement(
          BraftEditor,
          _objectSpread(
            _objectSpread({}, aaa),
            {},
            {
              maxLength: true,
              contentStyle: contentStyle,
              onChange: handleEditorChange,
              defaultValue: editorState,
              stripPastedStyles: true,
            },
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'prohibiti-words-top-box',
        },
        prohibitedWords && prohibitedWordsTip(prohibitedWords),
      ),
    );
  } else if (type === 'input') {
    return /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'raftEditor-box raftEditor-box-input ' + classes,
          style: contentStyle,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'data-count-box',
          },
          /*#__PURE__*/ React.createElement(
            'span',
            {
              className: 'current-data-length',
            },
            maxLength ? ''.concat(currentTextLength) : '',
          ),
          maxLength ? '/'.concat(maxLength) : '',
        ),
        /*#__PURE__*/ React.createElement(
          BraftEditor,
          _objectSpread(
            _objectSpread({}, aaa),
            {},
            {
              maxLength: true,
              contentStyle: contentStyle,
              onChange: handleEditorChange,
              defaultValue: editorState,
              stripPastedStyles: true,
            },
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'prohibiti-words-top-box',
        },
        prohibitedWords && prohibitedWordsTip(prohibitedWords),
      ),
    );
  } else {
    return /*#__PURE__*/ React.createElement('div', null);
  }
}
