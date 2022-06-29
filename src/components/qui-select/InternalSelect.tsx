import React, { FC } from 'react';
import RcSelect from 'rc-select';
import { SelectProps } from './config'
import { getTransitionName,getTransitionDirection } from '../_util/motion';
import { ConfigContext } from '../config-provider/context';
import './style/index.less'

const InternalSelect:FC<SelectProps>=(props) => {
  const {
    getPopupContainer,
    dropdownClassName,
    showArrow = true,
    virtual = true,
    defaultOpen = false,
    dropdownStyle = { maxHeight: 100, overflow: "scroll" },
    style = { width: 168 },
    dropdownMatchSelectWidth = true,
    optionLabelProp = "children",
    clearIcon,
    prefixCls: customizePrefixCls,
    children,
    placement,
    ...elseprops
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // 清楚icon
  const clearIconInit = () => {
    return <div className={`${prefixCls}-clear-icon`}></div>
  }
  return <RcSelect<any, any>
    virtual={virtual}
    dropdownMatchSelectWidth={dropdownMatchSelectWidth}
    {...elseprops}
    defaultOpen={defaultOpen}
    transitionName={getTransitionName(
      rootPrefixCls,
      getTransitionDirection(placement),
      props.transitionName,
    )}
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