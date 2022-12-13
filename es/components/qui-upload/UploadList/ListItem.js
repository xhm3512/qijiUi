import React, { useContext } from "react";
import { UploadContext } from '../Upload';
export default (function (_ref) {
  var children = _ref.children,
    file = _ref.file;
  var _useContext = useContext(UploadContext),
    onPreview = _useContext.onPreview;
  var handlePreview = function handlePreview(e) {
    e.preventDefault();
    e.stopPropagation();
    onPreview === null || onPreview === void 0 ? void 0 : onPreview(file);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: handlePreview
  }, children);
});