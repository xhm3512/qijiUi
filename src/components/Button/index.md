---
title: Button 按钮
group:
  title: 通用
  order: 1
---

## primary

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <Button type="primary" size="large">
      text
    </Button>
    &nbsp;
    <Button type="primary" size="middle">
      text
    </Button>&nbsp;
    <Button type="primary" size="small">
      text
    </Button>
    &nbsp;
    <Button type="primary" size="small" disabled>
      disable
    </Button>
    <br />
    <br />
    <Button type="primary" size="large" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="primary" size="middle" icon={<Icon />}>
      icon
    </Button> &nbsp;
    <Button type="primary" size="small" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="primary" size="small" disabled icon={<Icon />}>
      icon
    </Button> &nbsp;
    <br />
    <br />
    <Button type="primary" size="large" icon={<Icon />} loading>
      text
    </Button>
    &nbsp;
    <Button type="primary" size="middle" icon={<Icon />} loading>
      text
    </Button>&nbsp;
    <Button type="primary" size="small" icon={<Icon />} loading>
      text
    </Button>
    &nbsp;
    <Button type="primary" size="small" icon={<Icon />} loading>
      text
    </Button>&nbsp;
    <Button type="primary" size="small" icon={<Icon />} loading disabled>
      text
    </Button>
    &nbsp;
  </>
);
```

## outline

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <Button type="outline" size="large">
      text
    </Button>
    &nbsp;
    <Button type="outline" size="middle">
      text
    </Button>&nbsp;
    <Button type="outline" size="small">
      text
    </Button>
    &nbsp;
    <Button type="outline" size="small" disabled>
      disable
    </Button>
    <br />
    <br />
    <Button type="outline" size="large" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="outline" size="middle" icon={<Icon />}>
      icon
    </Button> &nbsp;
    <Button type="outline" size="small" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="outline" size="small" disabled icon={<Icon />}>
      icon
    </Button> &nbsp;
    <br />
    <br />
  </>
);
```

## secondary

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <Button type="secondary" size="large">
      text
    </Button>
    &nbsp;
    <Button type="secondary" size="middle">
      text
    </Button>&nbsp;
    <Button type="secondary" size="small">
      text
    </Button>
    &nbsp;
    <Button type="secondary" size="small" disabled>
      disable
    </Button>
    <br />
    <br />
    <Button type="secondary" size="large" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="secondary" size="middle" icon={<Icon />}>
      icon
    </Button> &nbsp;
    <Button type="secondary" size="small" icon={<Icon />}>
      icon
    </Button>{' '}
    &nbsp;
    <Button type="secondary" size="small" disabled icon={<Icon />}>
      icon
    </Button> &nbsp;
    <br />
    <br />
  </>
);
```

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

按钮的属性说明如下：

| 属性      |                                                                 说明                                                                 |                 类型                  |  默认值  | 版本 |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------: | :------: | ---: |
| type      |                                                             设置按钮类型                                                             | `primary` \| `secondary` \| `outline` | default  |      |
| onClick   |                                                           点击按钮时的回调                                                           |           `(event) => void`           |    -     |      |
| disabled  |                                                             按钮失效状态                                                             |                boolean                |  false   |      |
| icon      |                                                          设置按钮的图标组件                                                          |               ReactNode               |    -     |      |
| size      |                                                             设置按钮大小                                                             |    `large` \| `middle` \| `small`     | `middle` |      |  | - |  |
| loading   |                                                           设置按钮载入状态                                                           |                boolean                |  false   |      |
| htmlType  | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |                string                 | `button` |      |
| className |                                                           自定义 className                                                           |                string                 |    -     |      |
