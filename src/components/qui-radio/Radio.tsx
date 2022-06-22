import React, { FC, ForwardRefRenderFunction } from 'react';
import RcCheckbox, { Props } from 'rc-checkbox';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import RadioGroupContext from './context';
import './style/index.less'
export type RadioProps = Props;
const InternalRadio: ForwardRefRenderFunction<any, RadioProps> = (props, ref) => {
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);
  const context = React.useContext(RadioGroupContext);
  const prefixCls = 'qui-radio'
  const { children,style, className,...restProps } = props;
  const radioProps: RadioProps = { ...restProps };
  const onChange = (e: any) => {
    props.onChange?.(e);
    context?.onChange?.(e);
  };
  const isChecked = context ? props.value === context?.value : radioProps.checked;
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = isChecked;
    radioProps.disabled = props.disabled || context.disabled;
  } 
  
  return <label
    style={style}
    className={classNames(`${prefixCls}-wrapper`, {
      [`${prefixCls}-wrapper-checked`]: isChecked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    },className)}
  >
    <RcCheckbox
      type="radio"
      ref={mergedRef}
      {...radioProps}
      prefixCls={prefixCls}
    />
    {children !== undefined ? <span className={`${prefixCls}-text`}>{children}</span> : null}
  </label>
};
const Radio = React.forwardRef<unknown, RadioProps>(InternalRadio);
export default Radio;
