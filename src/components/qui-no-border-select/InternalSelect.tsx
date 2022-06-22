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
    dropdownStyle = { maxHeight: 100,minHeight: 80, overflow: "scroll" },
    style={ width: 60 },
    dropdownMatchSelectWidth = true,
    optionLabelProp = "children",
    clearIcon=true,
    prefixCls='qui-no-border-select',
    children,
    ...elseprops
  }
) => {
  
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
    clearIcon={clearIcon}
  >
    {children}
  </RcSelect>
};

export default InternalSelect;