import React, { useContext } from "react";
import { UploadListContent } from '../Upload'
export default ({ children }: any) => {
  const { handleRemove, list } = useContext(UploadListContent);
  const onRemove = (e: any, itemfile: any) => {
    e.preventDefault();
    e.stopPropagation()
    handleRemove(itemfile)
  }
  const windowURL = window.URL || window.webkitURL;
  const renderChildren = (children: React.ReactNode) => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<any>;
      const { itemfile, children, ...elseProps } = childElement.props;
      const url = windowURL.createObjectURL(new Blob([itemfile]));
      console.log(999, windowURL.createObjectURL(new Blob([itemfile])), itemfile);
      return <div {...elseProps}>
        <img src={url} />
        <span onClick={(e) => onRemove(e, itemfile)}>删除</span>
      </div>
    })
  }
  return <div onClick={e => { e.preventDefault(); e.stopPropagation() }}>{renderChildren(children)}</div>
}