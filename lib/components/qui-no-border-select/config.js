"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.SECRET_COMBOBOX_MODE_DO_NOT_USE = void 0;
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
exports.tuple = tuple;
var SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
var InputStatuses = tuple('warning', 'error', '');
var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
exports.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;