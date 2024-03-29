---
title: Icon 图标
description: 语义化的矢量图形
group:
  title: 通用
---

# Icon svg图标

语义化的矢量图形

### 图标列表
#### 网站通用图标

```tsx
import React from 'react';
import { QuiIcons } from 'qiji';
import { Row, Col, Divider } from 'antd';
import './md.less';
const {
  WorksManagerCustom,
  DataCustom,
  SalaryCustom,
  NewsCustom,
  ToolTipCustom,
  SwitchCustom,
  EditorCustom,
  PreviewCustom,
  PreviewHiddenCustom,
  SoundCustom,
} = QuiIcons;
const arr = [
  {
    id: 'WorksManagerCustom',
    components: <WorksManagerCustom />,
  },
  {
    id: 'DataCustom',
    components: <DataCustom className="ert" />,
  },
  {
    id: 'SalaryCustom',
    components: <SalaryCustom />,
  },
  {
    id: 'NewsCustom',
    components: <NewsCustom />,
  },
  // {
  //   id: 'ToolTipCustom',
  //   components: <ToolTipCustom active />,
  // },
  {
    id: 'SwitchCustom',
    components: <SwitchCustom />,
  },
  {
    id: 'PreviewCustom',
    components: <PreviewCustom />,
  },
  {
    id: 'PreviewHiddenCustom',
    components: <PreviewHiddenCustom />,
  },
   {
    id: 'SoundCustom',
    components: <SoundCustom />,
  },
];
export default () => (
  <Row style={{ fontSize: '30px' }}>
    {arr.map(item => (
      <div className="item-box" key={item.id}>
        <div className="icon">{item.components}</div>
        <div className="icon-name">{item.id}</div>
      </div>
    ))}
  </Row>
);
```
#### 编辑类图标

```tsx
import React from 'react';
import { QuiIcons } from 'qiji';
import { Row, Col, Divider } from 'antd';
import './md.less';
const {
  UserCustom,
  DeleteCustom,
  EditorCustom,
  
} = QuiIcons;
const arr = [
  {
    id: 'UserCustom',
    components: <UserCustom />,
  },

   {
    id: 'DeleteCustom',
    components: <DeleteCustom />,
  },
 
  {
    id: 'EditorCustom',
    components: <EditorCustom />,
  },
];
export default () => (
  <Row style={{ fontSize: '30px' }}>
    {arr.map(item => (
      <div className="item-box" key={item.id}>
        <div className="icon">{item.components}</div>
        <div className="icon-name">{item.id}</div>
      </div>
    ))}
  </Row>
);
```
#### 方向性图标

```tsx
import React from 'react';
import { QuiIcons } from 'qiji';
import { Row, Col, Divider } from 'antd';
import './md.less';
const {
  BottomCustom,
  ArrowCustom,
} = QuiIcons;
const arr = [
  {
    id: 'BottomCustom',
    components: <BottomCustom />,
  },
  {
    id: 'ArrowCustom',
    components: <ArrowCustom />,
  },
 
];
export default () => (
  <Row style={{ fontSize: '30px' }}>
    {arr.map(item => (
      <div className="item-box" key={item.id}>
        <div className="icon">{item.components}</div>
        <div className="icon-name">{item.id}</div>
      </div>
    ))}
  </Row>
);
```
## API

`Icon` 中的 `component` 组件的接受的属性如下：

| 字段      | 说明                    | 类型             | 只读值         | 版本 |
| --------- | ----------------------- | ---------------- | -------------- | ---- |
| className | 计算后的 `svg` 类名     | string           | -              |      |
| fill      | `svg` 元素填充的颜色    | string           | `currentColor` |      |
| height    | `svg` 元素高度          | string \| number | `1em`          |      |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -              |      |
| width     | `svg` 元素宽度          | string \| number | `1em`          |      |
