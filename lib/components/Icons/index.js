'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _icons = _interopRequireDefault(require('@ant-design/icons'));

var _HomeSvg = _interopRequireDefault(require('./HomeSvg'));

var _WorksManagerSvg = _interopRequireDefault(require('./WorksManagerSvg'));

var _DataSvg = _interopRequireDefault(require('./DataSvg'));

var _SalarySvg = _interopRequireDefault(require('./SalarySvg'));

var _UserSvg = _interopRequireDefault(require('./UserSvg'));

var _NewsSvg = _interopRequireDefault(require('./NewsSvg'));

var _ToolTip = _interopRequireDefault(require('./ToolTip'));

var _Switch = _interopRequireDefault(require('./Switch'));

var _Arrow = _interopRequireDefault(require('./Arrow'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
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

var HomeCustom = CustomIcon(_HomeSvg.default);
var WorksManagerCustom = CustomIcon(_WorksManagerSvg.default);
var DataCustom = CustomIcon(_DataSvg.default);
var SalaryCustom = CustomIcon(_SalarySvg.default);
var UserCustom = CustomIcon(_UserSvg.default);
var NewsCustom = CustomIcon(_NewsSvg.default);
var ArrowCustom = CustomIcon(_Arrow.default);
var SwitchCustom = CustomIcon(_Switch.default); // const ToolTipCustom = CustomIcon(ToolTipDiv);

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
};
exports.default = _default;
