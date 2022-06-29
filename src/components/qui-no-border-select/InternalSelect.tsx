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
    dropdownStyle = { maxHeight: 100, minHeight: 80, overflowY: "auto" },
    style = { width: 60 },
    dropdownMatchSelectWidth = true,
    optionLabelProp = "children",
    clearIcon = true,
    placement,
    prefixCls: customizePrefixCls,
    children,
    ...elseprops
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('no-border-select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
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
    clearIcon={clearIcon}
  >
    {children}
  </RcSelect>
};

export default InternalSelect;