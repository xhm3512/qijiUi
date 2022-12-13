function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import Icon from '@ant-design/icons';
import HomeSvg from './HomeSvg';
import WorksManagerSvg from './WorksManagerSvg';
import DataSvg from './DataSvg';
import SalarySvg from './SalarySvg';
import UserSvg from './UserSvg';
import NewsSvg from './NewsSvg';
import ToolTipCustom from './ToolTip';
import SwitchSvg from './Switch';
import ArrowSvg from './Arrow';
import EditorSvg from './Editor2';
import PreviewSvg from './Preview';
import PreviewHiddenSvg from './PreviewHidden';
import DeleteSvg from './Delete';
import SoundSvg from './Sound';
import BottomSvg from './Bottom';
import './style/index.less';
var CustomIcon = function CustomIcon(Component) {
  return function (props) {
    return /*#__PURE__*/React.createElement(Icon, _objectSpread({
      component: Component
    }, props));
  };
};
var HomeCustom = CustomIcon(HomeSvg);
var WorksManagerCustom = CustomIcon(WorksManagerSvg);
var DataCustom = CustomIcon(DataSvg);
var SalaryCustom = CustomIcon(SalarySvg);
var UserCustom = CustomIcon(UserSvg);
var NewsCustom = CustomIcon(NewsSvg);
var ArrowCustom = CustomIcon(ArrowSvg);
var SwitchCustom = CustomIcon(SwitchSvg);
var EditorCustom = CustomIcon(EditorSvg);
var PreviewCustom = CustomIcon(PreviewSvg);
var PreviewHiddenCustom = CustomIcon(PreviewHiddenSvg);
var DeleteCustom = CustomIcon(DeleteSvg);
var SoundCustom = CustomIcon(SoundSvg);
var BottomCustom = CustomIcon(BottomSvg);
// const ToolTipCustom = CustomIcon(ToolTipDiv);
export default {
  HomeCustom: HomeCustom,
  WorksManagerCustom: WorksManagerCustom,
  DataCustom: DataCustom,
  SalaryCustom: SalaryCustom,
  UserCustom: UserCustom,
  NewsCustom: NewsCustom,
  ArrowCustom: ArrowCustom,
  ToolTipCustom: ToolTipCustom,
  SwitchCustom: SwitchCustom,
  EditorCustom: EditorCustom,
  PreviewCustom: PreviewCustom,
  PreviewHiddenCustom: PreviewHiddenCustom,
  DeleteCustom: DeleteCustom,
  SoundCustom: SoundCustom,
  BottomCustom: BottomCustom
};