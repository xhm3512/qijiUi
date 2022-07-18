import React, { ForwardRefRenderFunction } from 'react';
import RcCheckbox, { Props } from 'rc-checkbox';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import { GroupContext } from './Group';
import './style/index.less'

export interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
}
export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}
export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
}
const InternalCheckBox: ForwardRefRenderFunction<any, CheckboxProps> = (props, ref) => {
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);
  const checkboxGroup = React.useContext(GroupContext);
  const prefixCls = 'qui-checkbox'
  const {
    children,
    style,
    className,
    indeterminate,
    onMouseEnter,
    onMouseLeave,
    ...restProps
  } = props;
  const prevValue = React.useRef(restProps.value);

  React.useEffect(() => {
    if (restProps.value !== prevValue.current) {
      prevValue.current = restProps.value;
    }
  }, [restProps.value]);
  const checkboxProps: any = { ...restProps };
  if (checkboxGroup) {
    checkboxProps.onChange = (args) => {
      if (restProps.onChange) {
        restProps.onChange(args);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({ label: children, value: restProps.value });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value && checkboxGroup.value?.indexOf(restProps.value) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }
  const checkboxClass = classNames({
    [`${prefixCls}-indeterminate`]: indeterminate,
  });
  return <label
    style={style}
    className={classNames(`${prefixCls}-wrapper`, {
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled,
    }, className)}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <RcCheckbox
      ref={mergedRef}
      {...checkboxProps}
      prefixCls={prefixCls}
      className={checkboxClass}
    />
    {children !== undefined ? <span className={`${prefixCls}-text`}>{children}</span> : null}
  </label>
};
const CheckBox = React.forwardRef<unknown, CheckboxProps>(InternalCheckBox);
export default CheckBox;
