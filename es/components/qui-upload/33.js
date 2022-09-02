function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import classNames from 'classnames';
import Dragger from './Dragger';
import UploadList from './UploadList';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';
import { ConfigContext } from '../config-provider/context';
var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
import './style/index.less';

var InternalUpload = function InternalUpload(props, ref) {
  var _classNames2;

  var fileList = props.fileList,
      defaultFileList = props.defaultFileList,
      onRemove = props.onRemove,
      showUploadList = props.showUploadList,
      listType = props.listType,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      onChange = props.onChange,
      onDrop = props.onDrop,
      previewFile = props.previewFile,
      disabled = props.disabled,
      propLocale = props.locale,
      iconRender = props.iconRender,
      isImageUrl = props.isImageUrl,
      progress = props.progress,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      type = props.type,
      children = props.children,
      style = props.style,
      itemRender = props.itemRender,
      maxCount = props.maxCount;

  var _useMergedState = useMergedState(defaultFileList || [], {
    value: fileList,
    postState: function postState(list) {
      return list !== null && list !== void 0 ? list : [];
    }
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];

  var _React$useState = React.useState('drop'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dragState = _React$useState2[0],
      setDragState = _React$useState2[1];

  var upload = React.useRef();
  React.useEffect(function () {
    console.warn('fileList' in props || !('value' in props), 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
    console.warn(!('transformFile' in props), 'Upload', '`transformFile` is deprecated. Please use `beforeUpload` directly.');
  }, []); // Control mode will auto fill file uid if not provided

  React.useMemo(function () {
    var timestamp = Date.now();
    (fileList || []).forEach(function (file, index) {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = "__AUTO__".concat(timestamp, "_").concat(index, "__");
      }
    });
  }, [fileList]); // 上传数据发生改变处理

  var onInternalChange = function onInternalChange(file, changedFileList, event) {
    var cloneList = _toConsumableArray(changedFileList); // Cut to match count


    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }

    setMergedFileList(cloneList);
    var changeInfo = {
      file: file,
      fileList: cloneList
    };

    if (event) {
      changeInfo.event = event;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo);
  };

  var mergedBeforeUpload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fileListArgs) {
      var beforeUpload, transformFile, parsedFile, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload, transformFile = props.transformFile;
              parsedFile = file;

              if (!beforeUpload) {
                _context.next = 13;
                break;
              }

              _context.next = 5;
              return beforeUpload(file, fileListArgs);

            case 5:
              result = _context.sent;

              if (!(result === false)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", false);

            case 8:
              // Hack for LIST_IGNORE, we add additional info to remove from the list
              delete file[LIST_IGNORE];

              if (!(result === LIST_IGNORE)) {
                _context.next = 12;
                break;
              }

              Object.defineProperty(file, LIST_IGNORE, {
                value: true,
                configurable: true
              });
              return _context.abrupt("return", false);

            case 12:
              if (_typeof(result) === 'object' && result) {
                parsedFile = result;
              }

            case 13:
              if (!transformFile) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return transformFile(parsedFile);

            case 16:
              parsedFile = _context.sent;

            case 17:
              return _context.abrupt("return", parsedFile);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function mergedBeforeUpload(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var onBatchStart = function onBatchStart(batchFileInfoList) {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    var filteredFileInfoList = batchFileInfoList.filter(function (info) {
      return !info.file[LIST_IGNORE];
    }); // Nothing to do since no file need upload

    if (!filteredFileInfoList.length) {
      return;
    }

    var objectFileList = filteredFileInfoList.map(function (info) {
      return file2Obj(info.file);
    }); // Concat new files with prev files

    var newFileList = _toConsumableArray(mergedFileList);

    objectFileList.forEach(function (fileObj) {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });
    objectFileList.forEach(function (fileObj, index) {
      // Repeat trigger `onChange` event for compatible
      var triggerFileObj = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        var originFileObj = fileObj.originFileObj;
        var clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type
          });
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type
          });
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  };

  var onSuccess = function onSuccess(response, file, xhr) {
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    } // removed


    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var onProgress = function onProgress(e, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList, e);
  };

  var onError = function onError(error, response, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var handleRemove = function handleRemove(file) {
    var currentFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
      // Prevent removing file
      if (ret === false) {
        return;
      }

      var removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        var _upload$current;

        currentFile = _objectSpread(_objectSpread({}, file), {}, {
          status: 'removed'
        });
        mergedFileList === null || mergedFileList === void 0 ? void 0 : mergedFileList.forEach(function (item) {
          var matchKey = currentFile.uid !== undefined ? 'uid' : 'name';

          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        (_upload$current = upload.current) === null || _upload$current === void 0 ? void 0 : _upload$current.abort(currentFile);
        onInternalChange(currentFile, removedFileList);
      }
    });
  };

  var onFileDrop = function onFileDrop(e) {
    setDragState(e.type);

    if (e.type === 'drop') {
      onDrop === null || onDrop === void 0 ? void 0 : onDrop(e);
    }
  }; // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      onBatchStart: onBatchStart,
      onSuccess: onSuccess,
      onProgress: onProgress,
      onError: onError,
      fileList: mergedFileList,
      upload: upload.current
    };
  });

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);

  var rcUploadProps = _objectSpread(_objectSpread({
    onBatchStart: onBatchStart,
    onError: onError,
    onProgress: onProgress,
    onSuccess: onSuccess
  }, props), {}, {
    prefixCls: prefixCls,
    beforeUpload: mergedBeforeUpload,
    onChange: undefined
  });

  delete rcUploadProps.className;
  delete rcUploadProps.style; // Remove id to avoid open by label when trigger is hidden
  // !children: https://github.com/ant-design/ant-design/issues/14298
  // disabled: https://github.com/ant-design/ant-design/issues/16478
  //           https://github.com/ant-design/ant-design/issues/24197

  if (!children || disabled) {
    delete rcUploadProps.id;
  }

  var renderUploadList = function renderUploadList(button, buttonVisible) {
    return showUploadList ? /*#__PURE__*/React.createElement("div", null, function () {
      var _ref2 = typeof showUploadList === 'boolean' ? {} : showUploadList,
          showRemoveIcon = _ref2.showRemoveIcon,
          showPreviewIcon = _ref2.showPreviewIcon,
          showDownloadIcon = _ref2.showDownloadIcon,
          removeIcon = _ref2.removeIcon,
          previewIcon = _ref2.previewIcon,
          downloadIcon = _ref2.downloadIcon;

      return /*#__PURE__*/React.createElement(UploadList, {
        listType: listType,
        items: mergedFileList,
        previewFile: previewFile,
        onPreview: onPreview,
        onDownload: onDownload,
        onRemove: handleRemove,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        previewIcon: previewIcon,
        downloadIcon: downloadIcon,
        iconRender: iconRender,
        locale: _objectSpread({}, propLocale),
        isImageUrl: isImageUrl,
        progress: progress,
        appendAction: button,
        appendActionVisible: buttonVisible,
        itemRender: itemRender
      });
    }) : button;
  };

  if (type === 'drag') {
    var _classNames;

    var dragCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-drag"), true), _defineProperty(_classNames, "".concat(prefixCls, "-drag-uploading"), mergedFileList.some(function (file) {
      return file.status === 'uploading';
    })), _defineProperty(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      className: dragCls,
      onDrop: onFileDrop,
      onDragOver: onFileDrop,
      onDragLeave: onFileDrop,
      style: style
    }), renderUploadList());
  }

  var uploadButtonCls = classNames(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-select"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2));

  var renderUploadButton = function renderUploadButton(uploadButtonStyle) {
    return /*#__PURE__*/React.createElement("div", {
      className: uploadButtonCls,
      style: uploadButtonStyle
    });
  };

  if (listType === 'picture-card') {
    return /*#__PURE__*/React.createElement("span", {
      className: classNames("".concat(prefixCls, "-picture-card-wrapper"), className)
    }, renderUploadList(renderUploadButton(), !!children));
  }

  return /*#__PURE__*/React.createElement("span", {
    className: className
  }, renderUploadButton(children ? undefined : {
    display: 'none'
  }), renderUploadList());
};

var ForwardUpload = /*#__PURE__*/React.forwardRef(InternalUpload);
var Upload = ForwardUpload;
Upload.Dragger = Dragger;
Upload.LIST_IGNORE = LIST_IGNORE;
Upload.displayName = 'Upload';
Upload.defaultProps = {
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  showUploadList: true,
  listType: 'text',
  className: '',
  disabled: false,
  supportServerRender: true
};
export default Upload;