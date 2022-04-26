import React, { FC, ReactNode } from 'react';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;
import './style/index.less';
interface PropsState {
  children: Array<ReactNode>;
}
const tabs: FC<PropsState> = ({ children }) => {
  const callback = () => {};
  return (
    <Tabs
      defaultActiveKey="0"
      onChange={callback}
      tabBarGutter={42}
      tabBarStyle={
        {
          // color:'red'
        }
      }
    >
      {children.map((item: any, i) => {
        return (
          <TabPane tab={item.props.title} key={i}>
            {item}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default tabs;
