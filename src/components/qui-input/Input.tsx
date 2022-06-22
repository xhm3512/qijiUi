import React, { FC, ReactNode, forwardRef,useRef } from 'react';
import RcInput, { InputProps as RcInputProps, InputRef } from 'rc-input';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import QuiImgIcons from '../qui-img-icons'
const { CloseInput } = QuiImgIcons;
import './style/index.less'
export interface PropsState extends RcInputProps {
  textErr?: ReactNode
}
export type { InputRef };
const InternalInput = forwardRef<InputRef, PropsState>((props, ref) => {
  const {
    prefixCls = 'qui-input',
    textErr,
    disabled,
    allowClear,
    ...elseProps
  } = props;
  const inputRef = useRef<InputRef>(null);
  const CloseInputWrap = () => {
    return <div className={`${prefixCls}-close-icon`}>
      <CloseInput />
    </div >
  }
    // Allow clear
  let mergedAllowClear;
  if (typeof allowClear === 'object' && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = { clearIcon: <CloseInputWrap /> };
  }
  return <>
    <RcInput
      ref={composeRef(ref, inputRef)}
      allowClear={mergedAllowClear}
      prefixCls={prefixCls}
      disabled={disabled}
      affixWrapperClassName={`${prefixCls}-wrapper`}
      inputClassName={classNames( {
        [`${prefixCls}-error`]: (!!textErr),
        [`${prefixCls}-normal`]: (!textErr)
      })}
      {...elseProps}
    />
    <div className={`${prefixCls}-err-text`}>{textErr}</div>
  </>;
})


export default InternalInput