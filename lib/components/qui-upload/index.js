"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Upload = _interopRequireDefault(require("./Upload"));
var _Dragger = _interopRequireDefault(require("./Dragger"));
var _UploadList = _interopRequireDefault(require("./UploadList"));
var _ListItem = _interopRequireDefault(require("./UploadList/ListItem"));
var _ListItemDelete = _interopRequireDefault(require("./UploadList/ListItemDelete"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_Upload.default.Dragger = _Dragger.default;
_Upload.default.UploadList = _UploadList.default;
_Upload.default.ListItem = _ListItem.default;
_Upload.default.ListItemDelete = _ListItemDelete.default;
var _default = _Upload.default;
exports.default = _default;