import React, { useContext } from "react";
import { UploadContext } from '../Upload';
export default (function (_ref) {
  var children = _ref.children,
    file = _ref.file;
  var _useContext = useContext(UploadContext),
    handleRemove = _useContext.handleRemove;
  var onRemove = function onRemove(e) {
    e.preventDefault();
    e.stopPropagation();
    handleRemove === null || handleRemove === void 0 ? void 0 : handleRemove(file);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onRemove
  }, children);
});