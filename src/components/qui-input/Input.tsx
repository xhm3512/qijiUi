import React, { ReactNode, forwardRef, useRef } from 'react';
import RcInput, { InputProps as RcInputProps, InputRef } from 'rc-input';
import classNames from 'classnames';
import { composeRef } from 'rc-util/lib/ref';
import QuiImgIcons from '../qui-img-icons'
const { CloseInput } = QuiImgIcons;
import './style/index.less'
export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}
export interface PropsState extends RcInputProps {
  textErr?: ReactNode
}
export type { InputRef };

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

export function resolveOnChange<E extends HTMLInputElement | HTMLTextAreaElement>(
  target: E,
  e:
    | React.ChangeEvent<E>
    | React.MouseEvent<HTMLElement, MouseEvent>
    | React.CompositionEvent<HTMLElement>,
  onChange: undefined | ((event: React.ChangeEvent<E>) => void),
  targetValue?: string,
) {
  if (!onChange) {
    return;
  }
  let event = e;

  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />

    const currentTarget = target.cloneNode(true) as E;

    // click clear icon
    event = Object.create(e, {
      target: { value: currentTarget },
      currentTarget: { value: currentTarget },
    });

    currentTarget.value = '';
    onChange(event as React.ChangeEvent<E>);
    return;
  }

  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: { value: target },
      currentTarget: { value: target },
    });

    target.value = targetValue;
    onChange(event as React.ChangeEvent<E>);
    return;
  }
  onChange(event as React.ChangeEvent<E>);
}

export function triggerFocus(
  element?: HTMLInputElement | HTMLTextAreaElement,
  option?: InputFocusOptions,
) {
  if (!element) return;

  element.focus(option);

  // Selection content
  const { cursor } = option || {};
  if (cursor) {
    const len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}
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
      inputClassName={classNames({
        [`${prefixCls}-error`]: (!!textErr),
        [`${prefixCls}-normal`]: (!textErr)
      })}
      {...elseProps}
    />
    <div className={`${prefixCls}-err-text`}>{textErr}</div>
  </>;
})


export default InternalInput;
export interface InputProps
  extends Omit<
    RcInputProps,
    'wrapperClassName' | 'groupClassName' | 'inputClassName' | 'affixWrapperClassName'
  > {
  size?: any;
  status?: any;
  bordered?: boolean;
  [key: `data-${string}`]: string;
}