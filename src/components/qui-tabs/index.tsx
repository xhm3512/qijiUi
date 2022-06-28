import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import RcTabs, { TabPane, TabsProps as RcTabsProps } from 'rc-tabs';
export type TabLevels = 'one'|'oneContent'|'two'|'twoSmall';
export interface CustomRcTabsProps  extends RcTabsProps {
level:TabLevels
}
import { ConfigContext } from '../config-provider/context';
import './style/index.less'
const Tas = ({
  prefixCls: customizePrefixCls,
  level='one',
  className,
  ...elseProps
}: CustomRcTabsProps) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  return <RcTabs
    prefixCls={prefixCls}
    moreIcon={false}
    className={
      classNames({
        [`${prefixCls}-level-${level}`]:level
      },className)
    }
    {...elseProps}
  />;
};
Tas.TabPane = TabPane;
export default Tas;
