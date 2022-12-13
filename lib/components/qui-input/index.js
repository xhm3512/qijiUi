"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input = _interopRequireDefault(require("./Input"));
var _Search = _interopRequireDefault(require("./Search"));
var _TextArea = _interopRequireDefault(require("./TextArea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Input = _Input.default;
Input.QuiSearch = _Search.default;
Input.TextArea = _TextArea.default;
var _default = Input;
exports.default = _default;