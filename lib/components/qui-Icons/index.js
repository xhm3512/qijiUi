"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _icons = _interopRequireDefault(require("@ant-design/icons"));
var _HomeSvg = _interopRequireDefault(require("./HomeSvg"));
var _WorksManagerSvg = _interopRequireDefault(require("./WorksManagerSvg"));
var _DataSvg = _interopRequireDefault(require("./DataSvg"));
var _SalarySvg = _interopRequireDefault(require("./SalarySvg"));
var _UserSvg = _interopRequireDefault(require("./UserSvg"));
var _NewsSvg = _interopRequireDefault(require("./NewsSvg"));
var _ToolTip = _interopRequireDefault(require("./ToolTip"));
var _Switch = _interopRequireDefault(require("./Switch"));
var _Arrow = _interopRequireDefault(require("./Arrow"));
var _Editor = _interopRequireDefault(require("./Editor2"));
var _Preview = _interopRequireDefault(require("./Preview"));
var _PreviewHidden = _interopRequireDefault(require("./PreviewHidden"));
var _Delete = _interopRequireDefault(require("./Delete"));
var _Sound = _interopRequireDefault(require("./Sound"));
var _Bottom = _interopRequireDefault(require("./Bottom"));
require("./style/index.less");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CustomIcon = function CustomIcon(Component) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(_icons.default, _objectSpread({
      component: Component
    }, props));
  };
};
var HomeCustom = CustomIcon(_HomeSvg.default);
var WorksManagerCustom = CustomIcon(_WorksManagerSvg.default);
var DataCustom = CustomIcon(_DataSvg.default);
var SalaryCustom = CustomIcon(_SalarySvg.default);
var UserCustom = CustomIcon(_UserSvg.default);
var NewsCustom = CustomIcon(_NewsSvg.default);
var ArrowCustom = CustomIcon(_Arrow.default);
var SwitchCustom = CustomIcon(_Switch.default);
var EditorCustom = CustomIcon(_Editor.default);
var PreviewCustom = CustomIcon(_Preview.default);
var PreviewHiddenCustom = CustomIcon(_PreviewHidden.default);
var DeleteCustom = CustomIcon(_Delete.default);
var SoundCustom = CustomIcon(_Sound.default);
var BottomCustom = CustomIcon(_Bottom.default);
// const ToolTipCustom = CustomIcon(ToolTipDiv);
var _default = {
  HomeCustom: HomeCustom,
  WorksManagerCustom: WorksManagerCustom,
  DataCustom: DataCustom,
  SalaryCustom: SalaryCustom,
  UserCustom: UserCustom,
  NewsCustom: NewsCustom,
  ArrowCustom: ArrowCustom,
  ToolTipCustom: _ToolTip.default,
  SwitchCustom: SwitchCustom,
  EditorCustom: EditorCustom,
  PreviewCustom: PreviewCustom,
  PreviewHiddenCustom: PreviewHiddenCustom,
  DeleteCustom: DeleteCustom,
  SoundCustom: SoundCustom,
  BottomCustom: BottomCustom
};
exports.default = _default;