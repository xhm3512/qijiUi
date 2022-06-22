---
title: ImgIcon 图标
description: ImgIcon
group:
  title: 通用
---



### 图标列表

```tsx
import React from 'react';
import { QuiImgIcons } from 'qiji';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.less';
import './md.less';
const { MoDalClose, SearchInput, CloseInput } = QuiImgIcons;
const arr = [
  {
    id: 'MoDalClose',
    components: <MoDalClose className="qw" />,
  },
  {
    id: 'SearchInput',
    components: <SearchInput className="qw" />,
  },
  {
    id: 'CloseInput',
    components: <CloseInput className="qw" />,
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

| 字段      | 说明                    | 类型             | 只读值 | 版本 |
| --------- | ----------------------- | ---------------- | ------ | ---- |
| className | 计算后的 `svg` 类名     | string           | -      |      |
| height    | `svg` 元素高度          | string \| number | `1em`  |      |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -      |      |
| width     | `svg` 元素宽度          | string \| number | `1em`  |      |
