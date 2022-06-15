"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rcSelect = require("rc-select");

var _InternalSelect = _interopRequireDefault(require("./InternalSelect"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuiSelect = _InternalSelect.default;
QuiSelect.SECRET_COMBOBOX_MODE_DO_NOT_USE = _config.SECRET_COMBOBOX_MODE_DO_NOT_USE;
QuiSelect.Option = _rcSelect.Option;
QuiSelect.OptGroup = _rcSelect.OptGroup;
var _default = QuiSelect;
exports.default = _default;