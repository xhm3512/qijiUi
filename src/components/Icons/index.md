---
title: Icon 图标
description: 语义化的矢量图形
group:
  title: 通用
---

## Icon 图标

语义化的矢量图形，基于 antd 图标组件开发

### 图标列表

```tsx
import React from 'react';
import { Icons } from 'qiji';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.less';
const {
  AccountExitCustom,
  CheckBoxCustom,
  CryingFace,
  DataSvg,
  NewsSvg,
  Add,
  Prve,
  Next,
  Salary,
  Tips,
  User,
  Mangers,
} = Icons;
export default () => (
  <Row style={{ fontSize: '30px' }}>
    <Col span={4}>
      <CheckBoxCustom />
    </Col>
    <Col span={4}>
      <CryingFace />
    </Col>
    <Col span={4}>
      <NewsSvg />
    </Col>
    <Col span={4}>
      <Add />
    </Col>
    <Col span={4}>
      <Prve />
    </Col>
    <Col span={4}>
      <Next />
    </Col>
    <Col span={4}>
      <Salary />
    </Col>
    <Col span={4}>
      <Tips />
    </Col>
    <Col span={4}>
      <User />
    </Col>
    <Col span={4}>
      <Mangers />
    </Col>
  </Row>
);
```
