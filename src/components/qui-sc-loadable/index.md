---
title: Loadable 组件懒加载
group:
  title: 其他
  order: 19
---

## Loadable 组件懒加载

react 路由懒加载

Demo:

```tsx
import React from 'react';
import { QuiScLoadable } from 'qiji';

const Home = QuiScLoadable(() =>
  import(/* webpackChunkName: "home" */ '@/components/qui-remark'),
);
export default () => <Home />;
```
