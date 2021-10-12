'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _icons = _interopRequireDefault(require('@ant-design/icons'));

var _AccountExitCustom = _interopRequireDefault(require('./AccountExitCustom'));

var _CheckBoxCustom = _interopRequireDefault(require('./CheckBoxCustom'));

var _CryingFace = _interopRequireDefault(require('./CryingFace'));

var _DataSvg = _interopRequireDefault(require('./DataSvg'));

var _NewsSvg = _interopRequireDefault(require('./NewsSvg'));

var _Add = _interopRequireDefault(require('./Add'));

var _Next = _interopRequireDefault(require('./Next'));

var _Prve = _interopRequireDefault(require('./Prve'));

var _Salary = _interopRequireDefault(require('./Salary'));

var _Tips = _interopRequireDefault(require('./Tips'));

var _User = _interopRequireDefault(require('./User'));

var _Mangers = _interopRequireDefault(require('./Mangers'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var CustomIcon = function CustomIcon(Component) {
  return function(props) {
    return /*#__PURE__*/ _react.default.createElement(
      _icons.default,
      _objectSpread(
        {
          component: Component,
        },
        props,
      ),
    );
  };
};

var AccountExitCustom = CustomIcon(_AccountExitCustom.default);
var CheckBoxCustom = CustomIcon(_CheckBoxCustom.default);
var CryingFace = CustomIcon(_CryingFace.default);
var DataSvg = CustomIcon(_DataSvg.default);
var NewsSvg = CustomIcon(_NewsSvg.default);
var Add = CustomIcon(_Add.default);
var Next = CustomIcon(_Next.default);
var Prve = CustomIcon(_Prve.default);
var Salary = CustomIcon(_Salary.default);
var Tips = CustomIcon(_Tips.default);
var User = CustomIcon(_User.default);
var Mangers = CustomIcon(_Mangers.default);
var _default = {
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
exports.default = _default;
