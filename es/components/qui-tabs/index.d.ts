import { TabPane, TabsProps as RcTabsProps } from 'rc-tabs';
export type TabLevels = 'one' | 'oneContent' | 'two' | 'twoSmall';
export interface CustomRcTabsProps extends RcTabsProps {
    level: TabLevels;
}
import './style/index.less';
declare const Tas: {
    ({ prefixCls: customizePrefixCls, level, className, ...elseProps }: CustomRcTabsProps): JSX.Element;
    TabPane: typeof TabPane;
};
export default Tas;
