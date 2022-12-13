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
var _CheckedBox = _interopRequireDefault(require("./CheckedBox"));
var _Group = _interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckedBox = _CheckedBox.default;
CheckedBox.QuiGroup = _Group.default;
var _default = CheckedBox;
exports.default = _default;