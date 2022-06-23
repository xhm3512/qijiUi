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
import { QuiButton } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <QuiButton type="primary" size="large">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="middle">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="small">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="small" disabled>
      disable
    </QuiButton>
    <br />
    <br />
    <QuiButton type="primary" size="large" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="primary" size="middle" icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
    <QuiButton type="primary" size="small" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="primary" size="small" disabled icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
    <br />
    <br />
    <QuiButton type="primary" size="large" icon={<Icon />} loading>
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="middle" icon={<Icon />} loading>
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="small" icon={<Icon />} loading>
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="primary" size="small" icon={<Icon />} loading>
      text
    </QuiButton>&nbsp;
    <QuiButton type="primary" size="small" icon={<Icon />} loading disabled>
      text
    </QuiButton>
    &nbsp;
  </>
);
```

## outline

Demo:

```tsx
import React from 'react';
import { QuiButton } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <QuiButton type="outline" size="large">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="outline" size="middle">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="outline" size="small">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="outline" size="small" disabled>
      disable
    </QuiButton>
    <br />
    <br />
    <QuiButton type="outline" size="large" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="outline" size="middle" icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
    <QuiButton type="outline" size="small" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="outline" size="small" disabled icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
    <br />
    <br />
  </>
);
```

## secondary

Demo:

```tsx
import React from 'react';
import { QuiButton } from 'qiji';
const Icon = () => {
  return <span type="primary">+</span>;
};
export default () => (
  <>
    <QuiButton type="secondary" size="large">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="secondary" size="middle">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="secondary" size="small">
      text
    </QuiButton>
    &nbsp;
    <QuiButton type="secondary" size="small" disabled>
      disable
    </QuiButton>
    <br />
    <br />
    <QuiButton type="secondary" size="large" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="secondary" size="middle" icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
    <QuiButton type="secondary" size="small" icon={<Icon />}>
      icon
    </QuiButton> &nbsp;
    <QuiButton type="secondary" size="small" disabled icon={<Icon />}>
      icon
    </QuiButton>{' '}
    &nbsp;
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
| type      |     设置按钮类型     | `primary` \| `secondary` \| `outline` | default  |      |
| onClick   |  点击按钮时的回调   |           `(event) => void`           |    -     |      |
| disabled  |     按钮失效状态    |                boolean                |  false   |      |
| icon      |    设置按钮的图标组件    |               ReactNode               |    -     |      |
| size      |   设置按钮大小  |    `large` \| `middle` \| `small`     | `middle` |      |  | - |  |
| loading   |   设置按钮载入状态   |                boolean                |  false   |      |
| hover     |    是否直接展示 hover 效果  |                boolean                |  false   |      |
| htmlType  | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |              string                 | `button` |      |
| className |     自定义 className   |     string   |    -     |      |
