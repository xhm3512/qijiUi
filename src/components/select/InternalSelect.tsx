import React, { FC } from 'react';
import RcSelect from 'rc-select';
import { SelectProps } from './config'
import './style/index.less'

const InternalSelect:FC<SelectProps>=(
  {
    getPopupContainer,
    dropdownClassName,
    showArrow = true,
    virtual = true,
    defaultOpen = false,
    dropdownStyle = { maxHeight: 100, overflow: "scroll" },
    style={ width: 168 },
    dropdownMatchSelectWidth = true,
    optionLabelProp = "children",
    clearIcon,
    prefixCls='qui-select',
    children,
    ...elseprops
  }
) => {
  // 清楚icon
  const clearIconInit = () => {
    return <div className={`${prefixCls}-clear-icon`}></div>
  }
  return <RcSelect<any, any>
    virtual={virtual}
    dropdownMatchSelectWidth={dropdownMatchSelectWidth}
    {...elseprops}
    defaultOpen={defaultOpen}
    // transitionName='223'
      prefixCls={prefixCls}
    getPopupContainer={getPopupContainer}
    dropdownClassName={dropdownClassName}
    showArrow={showArrow}
    optionLabelProp={optionLabelProp}
    style={style}
    dropdownStyle={dropdownStyle}
    clearIcon={clearIcon || clearIconInit}
  >
    {children}
  </RcSelect>
};

export default InternalSelect;