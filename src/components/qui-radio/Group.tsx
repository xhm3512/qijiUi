import * as React from 'react';
import { useState } from 'react';
import { RadioGroupContextProvider } from './context';
import { RadioGroupProps } from './interface'
const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const [value, setValue] = useState(props.value || props.defaultValue);
  const renderGroup = () => {
    const {
      children,
      options,
      disabled,
      style,
      onMouseEnter,
      onMouseLeave,
      ...eleseProps
    } = props;
    let childrenToRender = children;
    return (
      <div
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...eleseProps}
        ref={ref}
      >
        {childrenToRender}
      </div>
    );
  }
  const onRadioChange = (ev) => {

    const lastValue = value;
    const val = ev.target.value;
    setValue(val);
    const { onChange } = props;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  }

  return <RadioGroupContextProvider
    value={{
      onChange: onRadioChange,
      value,
      disabled: props.disabled,
      name: props.name,
    }}
  >
    {renderGroup()}
  </RadioGroupContextProvider>
})

export default RadioGroup;