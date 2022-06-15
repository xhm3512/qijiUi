function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var SwitchCustom = CustomIcon(SwitchSvg); // const ToolTipCustom = CustomIcon(ToolTipDiv);

export default {
  HomeCustom: HomeCustom,
  WorksManagerCustom: WorksManagerCustom,
  DataCustom: DataCustom,
  SalaryCustom: SalaryCustom,
  UserCustom: UserCustom,
  NewsCustom: NewsCustom,
  ArrowCustom: ArrowCustom,
  ToolTipCustom: ToolTipCustom,
  SwitchCustom: SwitchCustom
};