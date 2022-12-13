"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
exports.default = void 0;
var _Radio = _interopRequireDefault(require("./Radio"));
var _Group = _interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Radio = _Radio.default;
Radio.QuiGroup = _Group.default;
var _default = Radio;
exports.default = _default;