"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ModalClose = _interopRequireDefault(require("./ModalClose"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _CloseInput = _interopRequireDefault(require("./CloseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// type defaultProps = CloseProps;
var _default = {
  MoDalClose: _ModalClose.default,
  SearchInput: _SearchInput.default,
  CloseInput: _CloseInput.default
};
exports.default = _default;