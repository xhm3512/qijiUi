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

import React from 'react';
import Icon from '@ant-design/icons';

var CustomIcon = function CustomIcon(Component) {
  return function(props) {
    return /*#__PURE__*/ React.createElement(
      Icon,
      _objectSpread(
        {
          component: Component,
        },
        props,
      ),
    );
  };
};

import AccountExitCustomTemp from './AccountExitCustom'; //img

import CheckBoxCustomTemp from './CheckBoxCustom';
import CryingFaceTemp from './CryingFace';
import DataSvgTemo from './DataSvg';
import NewsSvgTemp from './NewsSvg';
import AddTemp from './Add';
import NextTemp from './Next';
import PrveTemp from './Prve';
import SalaryTemp from './Salary';
import TipsTemp from './Tips';
import UserTemp from './User';
import MangersTemp from './Mangers';
var AccountExitCustom = CustomIcon(AccountExitCustomTemp);
var CheckBoxCustom = CustomIcon(CheckBoxCustomTemp);
var CryingFace = CustomIcon(CryingFaceTemp);
var DataSvg = CustomIcon(DataSvgTemo);
var NewsSvg = CustomIcon(NewsSvgTemp);
var Add = CustomIcon(AddTemp);
var Next = CustomIcon(NextTemp);
var Prve = CustomIcon(PrveTemp);
var Salary = CustomIcon(SalaryTemp);
var Tips = CustomIcon(TipsTemp);
var User = CustomIcon(UserTemp);
var Mangers = CustomIcon(MangersTemp);
export default {
  AccountExitCustom: AccountExitCustom,
  CheckBoxCustom: CheckBoxCustom,
  CryingFace: CryingFace,
  DataSvg: DataSvg,
  NewsSvg: NewsSvg,
  Add: Add,
  Next: Next,
  Prve: Prve,
  Salary: Salary,
  Tips: Tips,
  User: User,
  Mangers: Mangers,
};
