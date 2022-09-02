"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcMotion = _interopRequireWildcard(require("rc-motion"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _PaperClipOutlined = _interopRequireDefault(require("@ant-design/icons/PaperClipOutlined"));

var _PictureTwoTone = _interopRequireDefault(require("@ant-design/icons/PictureTwoTone"));

var _FileTwoTone = _interopRequireDefault(require("@ant-design/icons/FileTwoTone"));

var _reactNode = require("../../_util/reactNode");

var _utils = require("../utils");

var _motion = _interopRequireDefault(require("../../_util/motion"));

var _context = require("../../config-provider/context");

var _ListItem = _interopRequireDefault(require("./ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useForceUpdate() {
  var _React$useReducer = React.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}

var listItemMotion = _objectSpread({}, _motion.default);

delete listItemMotion.onAppearEnd;
delete listItemMotion.onEnterEnd;
delete listItemMotion.onLeaveEnd;

var InternalUploadList = function InternalUploadList(_ref, ref) {
  var _classNames;

  var listType = _ref.listType,
      previewFile = _ref.previewFile,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onRemove = _ref.onRemove,
      locale = _ref.locale,
      iconRender = _ref.iconRender,
      isImgUrl = _ref.isImageUrl,
      customizePrefixCls = _ref.prefixCls,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      removeIcon = _ref.removeIcon,
      previewIcon = _ref.previewIcon,
      downloadIcon = _ref.downloadIcon,
      progress = _ref.progress,
      appendAction = _ref.appendAction,
      appendActionVisible = _ref.appendActionVisible,
      itemRender = _ref.itemRender;
  var forceUpdate = useForceUpdate();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1]; // ============================= Effect =============================


  React.useEffect(function () {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return;
    }

    (items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
        return;
      }

      file.thumbUrl = '';

      if (previewFile) {
        previewFile(file.originFileObj).then(function (previewDataUrl) {
          // Need append '' to avoid dead loop
          file.thumbUrl = previewDataUrl || '';
          forceUpdate();
        });
      }
    });
  }, [listType, items, previewFile]);
  React.useEffect(function () {
    setMotionAppear(true);
  }, []); // ============================= Events =============================

  var onInternalPreview = function onInternalPreview(file, e) {
    if (!onPreview) {
      return;
    }

    e === null || e === void 0 ? void 0 : e.preventDefault();
    return onPreview(file);
  };

  var onInternalDownload = function onInternalDownload(file) {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  var onInternalClose = function onInternalClose(file) {
    onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
  };

  var internalIconRender = function internalIconRender(file) {
    if (iconRender) {
      return iconRender(file, listType);
    }

    var isLoading = file.status === 'uploading';
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(_PictureTwoTone.default, null) : /*#__PURE__*/React.createElement(_FileTwoTone.default, null);
    var icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined.default, null) : /*#__PURE__*/React.createElement(_PaperClipOutlined.default, null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined.default, null) : fileIcon;
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon;
    }

    return icon;
  };

  var actionIconRender = function actionIconRender(customIcon, callback, prefixCls, title) {
    var btnProps = {
      type: 'text',
      size: 'small',
      title: title,
      onClick: function onClick(e) {
        callback();

        if ((0, _reactNode.isValidElement)(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if ((0, _reactNode.isValidElement)(customIcon)) {
      var btnIcon = (0, _reactNode.cloneElement)(customIcon, _objectSpread(_objectSpread({}, customIcon.props), {}, {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/React.createElement("div", _objectSpread(_objectSpread({}, btnProps), {}, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/React.createElement("div", _objectSpread({}, btnProps), /*#__PURE__*/React.createElement("span", null, customIcon));
  }; // ============================== Ref ===============================
  // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    };
  });

  var _React$useContext = React.useContext(_context.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction; // ============================= Render =============================


  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var listClassNames = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-list"), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-").concat(listType), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames)); // >>> Motion config

  var motionKeyList = _toConsumableArray(items.map(function (file) {
    return {
      key: file.uid,
      file: file
    };
  }));

  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate'; // const transitionName = list.length === 0 ? '' : `${prefixCls}-${animationDirection}`;

  var motionConfig = {
    motionDeadline: 2000,
    motionName: "".concat(prefixCls, "-").concat(animationDirection),
    keys: motionKeyList,
    motionAppear: motionAppear
  };

  if (listType !== 'picture-card') {
    motionConfig = _objectSpread(_objectSpread({}, listItemMotion), motionConfig);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: listClassNames
  }, /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, _objectSpread(_objectSpread({}, motionConfig), {}, {
    component: false
  }), function (_ref2) {
    var key = _ref2.key,
        file = _ref2.file,
        motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/React.createElement(_ListItem.default, {
      key: key,
      locale: locale,
      prefixCls: prefixCls,
      className: motionClassName,
      style: motionStyle,
      file: file,
      items: items,
      progress: progress,
      listType: listType,
      isImgUrl: isImgUrl,
      showPreviewIcon: showPreviewIcon,
      showRemoveIcon: showRemoveIcon,
      showDownloadIcon: showDownloadIcon,
      removeIcon: removeIcon,
      previewIcon: previewIcon,
      downloadIcon: downloadIcon,
      iconRender: internalIconRender,
      actionIconRender: actionIconRender,
      itemRender: itemRender,
      onPreview: onInternalPreview,
      onDownload: onInternalDownload,
      onClose: onInternalClose
    });
  }), appendAction && /*#__PURE__*/React.createElement(_rcMotion.default, _objectSpread(_objectSpread({}, motionConfig), {}, {
    visible: appendActionVisible,
    forceRender: true
  }), function (_ref3) {
    var motionClassName = _ref3.className,
        motionStyle = _ref3.style;
    return (0, _reactNode.cloneElement)(appendAction, function (oriProps) {
      return {
        className: (0, _classnames.default)(oriProps.className, motionClassName),
        style: _objectSpread(_objectSpread({}, motionStyle), {}, {
          // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
          pointerEvents: motionClassName ? 'none' : undefined
        }, oriProps.style)
      };
    });
  }));
};

var UploadList = /*#__PURE__*/React.forwardRef(InternalUploadList);
UploadList.displayName = 'UploadList';
UploadList.defaultProps = {
  listType: 'text',
  progress: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  appendActionVisible: true,
  previewFile: _utils.previewImage,
  isImageUrl: _utils.isImageUrl
};
var _default = UploadList;
exports.default = _default;