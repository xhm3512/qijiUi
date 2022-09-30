import React, { useContext } from "react";
import { UploadContext } from '../Upload'
export default ({ children, file }) => {
  const {
    handleRemove
  } = useContext(UploadContext);

  const onRemove = (e) => {
    e.preventDefault();
    e.stopPropagation()
    handleRemove?.(file)
  }
  return <div onClick={onRemove}>{children}</div>
}