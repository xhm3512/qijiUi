---
title: Tabs 标签页
group:
  title: 数据展示
  order: 4
---

# Tabs标签页
选项卡切换组件。

## 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
## 代码演示
### 基本用法:

```tsx
import React,{useRef} from 'react';
import { QuiTabs } from 'qiji';
const {TabPane}=QuiTabs

export default () => {
  const onChange=(val)=>{
  console.log(val)
  }
  return <QuiTabs
    onChange={onChange}
   
  >
  <TabPane tab="tab 1" key="1" >
    first
  </TabPane>
  <TabPane tab="tab 2" key="2">
    second
  </TabPane>
  <TabPane tab="tab 3" key="3" >
    third
  </TabPane>
  </QuiTabs>
};
```
### 位置:

```tsx
import React,{useEffect,useState} from 'react';
import { QuiTabs } from 'qiji';
import type { RadioChangeEvent } from 'antd';
import {Space,Radio} from 'antd'
const {TabPane}=QuiTabs

export default () => {
  type TabPosition = 'left' | 'right' | 'top' | 'bottom';
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');
  const onChange=(val)=>{
  console.log(val)
  }
  const changeTabPosition=(e:RadioChangeEvent)=>{
    setTabPosition(e.target.value)
  }
  return <>
  <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
  <QuiTabs
    tabPosition={tabPosition}
    defaultActiveKey='2'
    onChange={onChange}
  >
    <TabPane tab="tab 1" key="1">
      first
    </TabPane>
    <TabPane tab="tab 2" key="2">
      second
    </TabPane>
    <TabPane tab="tab 3" key="3" >
      third
    </TabPane>
  </QuiTabs>
  </>
};
```
### 等级:

```tsx
import React,{useEffect,useState} from 'react';
import { QuiTabs } from 'qiji';
import type { RadioChangeEvent } from 'antd';
import {Space,Radio} from 'antd'
const {TabPane}=QuiTabs

export default () => {
  type TabLevels = 'one'|'oneContent'|'two'|'twoSmall';
   const [tabLevel, setTabLevel] = useState<TabLevels>('one');
  const onChange=(val)=>{
  console.log(val)
  }
  const changeTabLevel=(e:RadioChangeEvent)=>{
    setTabLevel(e.target.value)
  }
  return <>
   <Space style={{ marginBottom: 24 }}>
        Tab Levels:
        <Radio.Group value={tabLevel} onChange={changeTabLevel}>
          <Radio.Button value="one">one</Radio.Button>
          <Radio.Button value="oneContent">oneContent</Radio.Button>
          <Radio.Button value="two">two</Radio.Button>
          <Radio.Button value="twoSmall">twoSmall</Radio.Button>
        </Radio.Group>
      </Space>
  <QuiTabs
    tabPosition='top'
    level={tabLevel}
    defaultActiveKey='2'
    onChange={onChange}
  >
    <TabPane tab="tab 1" key="1">
      first
    </TabPane>
    <TabPane tab="tab 2" key="2">
      second
    </TabPane>
    <TabPane tab="tab 3" key="3" >
      third
    </TabPane>
  </QuiTabs>
  </>
};
```
### 禁用:

```tsx
import React,{useRef} from 'react';
import { QuiTabs } from 'qiji';
const {TabPane}=QuiTabs

export default () => {
  const onChange=(val)=>{
  console.log(val)
  }
  return <QuiTabs
    tabPosition='top'
    level='two'
    defaultActiveKey='2'
    onChange={onChange}
  >
  <TabPane tab="tab 1" key="1" disabled>
    first
  </TabPane>
  <TabPane tab="tab 2" key="2">
    second
  </TabPane>
  <TabPane tab="tab 3" key="3" >
    third
  </TabPane>
  </QuiTabs>
};
```

### 附加内容:

```tsx
import React,{useRef} from 'react';
import { QuiTabs } from 'qiji';
const {TabPane}=QuiTabs

export default () => {
  const onChange=(val)=>{
  console.log(val)
  }
  return <QuiTabs
    tabPosition='top'
    level='two'
    defaultActiveKey='2'
    onChange={onChange}
    tabBarExtraContent={<div>more</div>}
  >
  <TabPane tab="tab 1" key="1">
    first
  </TabPane>
  <TabPane tab="tab 2" key="2">
    second
  </TabPane>
  <TabPane tab="tab 3" key="3" >
    third
  </TabPane>
  </QuiTabs>
};
```
### 滑动:

```tsx
import React,{useRef} from 'react';
import { QuiTabs } from 'qiji';
const {TabPane}=QuiTabs

export default () => {
  const onChange=(val)=>{
  console.log(val)
  }
  return <QuiTabs
    tabPosition='top'
    level='two'
    style={{ width: 100 }}
    defaultActiveKey='2'
    onChange={onChange}
  >
  <TabPane tab="tab 1" key="1">
    first
  </TabPane>
  <TabPane tab="tab 2" key="2">
    second
  </TabPane>
  <TabPane tab="tab 3" key="3" >
    third
  </TabPane>
  </QuiTabs>
};
```
## API
属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| level      |     展示等级   | `one` \| `oneContent` \|`oneContent` \| `oneContent` |  one |      |

更多api参照：https://www.npmjs.com/package/rc-tabs

