import React, { useContext } from "react";
import { UploadContext } from '../Upload'

export default ({ children,file }) => {
  const {
    onPreview
  } = useContext(UploadContext);
  const handlePreview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onPreview?.(file)
  }
  return <div onClick={handlePreview}>{children}</div>
}