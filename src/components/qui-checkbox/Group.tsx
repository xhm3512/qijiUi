import * as React from 'react';
import { useState } from 'react';
import omit from 'rc-util/lib/omit';
import { CheckedGroupProps } from './interface'
import QuiCheckbox from './CheckedBox'
export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

export interface CheckboxGroupContext {
  name?: string;
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  // registerValue: (val: string) => void;
  // cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);
const CheckedBoxGroup = React.forwardRef<HTMLDivElement, CheckedGroupProps>((props, ref) => {
  const [value, setValue] = useState(props.value || props.defaultValue || []);
  const {
    children,
    options,
    disabled,
    className,
    onMouseEnter,
    onMouseLeave,
    onChange,
    style,
    ...restProps
  } = props;
  const domProps = omit(restProps, ['value', 'disabled']);
  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);
  const getOptions = () =>
    options?.map(option => {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  const renderGroup = () => {
    let childrenToRender = children;
    if (options && options.length > 0) {
      childrenToRender = getOptions()?.map(option => {
        return (
          <QuiCheckbox
            // prefixCls={prefixCls}
            key={option.value.toString()}
            disabled={'disabled' in option ? option.disabled : disabled}
            checked={value?.indexOf(option.value) !== -1}
            onChange={option.onChange}
            // className={`${groupPrefixCls}-item`}
            style={option.style}
            value={option.label}
          >
            {option.label}
          </QuiCheckbox>
        )
      });
    }
    return childrenToRender;
  }
  const toggleOption = (option: CheckboxOptionType) => {
    const optionIndex = value?.indexOf(option.value);

    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in restProps)) {
      setValue(newValue);
    }
    const opts = getOptions();
    onChange?.(
      newValue
        // .filter(val => registeredValues.indexOf(val) !== -1)
        .sort((a, b) => {
          const indexA = opts?.findIndex(opt => opt.value === a) || 0;
          const indexB = opts?.findIndex(opt => opt.value === b) || 0;
          return indexA - indexB;
        }),
    );
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    toggleOption,
    value,
    disabled: disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    // registerValue,
    // cancelValue,
  };
  return <div
    {...domProps}
    ref={ref}
    style={style}
    className={className}
  >
    <GroupContext.Provider
    value={context}
  >
    {renderGroup()}
  </GroupContext.Provider>
  </div>
})

export default CheckedBoxGroup;