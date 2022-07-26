---
title: Qiji of React
order: 1
---

## Qiji of React

qiji 是基于 Ant Design 设计体系的 React UI 组件库，主要从业务中提取的组件，来提高日常开发效率。

## 兼容性

- 现代浏览器和 IE11（需要 polyfills）。

## 版本

- 最新版：npm V0.0.2

## 安装

#### 使用 npm 或 yarn 安装

推荐使用 npm 或 yarn 的方式进行开发

```
$ npm install qiji --save
```

```
yarn add qiji
```

## 示例

```tsx
import React, { useState } from 'react';
import { QuiDrawer,QuiButton } from 'qiji';
export default () => {
  const [visible, setVisible] = useState(false); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  const onClick = () => {
    setVisible(true);
  };
  const onClose=()=>{
    setVisible(false)
  }
  return (
    <>
      <QuiButton type="primary" size="large" onClick={onClick}>
      open
    </QuiButton>
      <QuiDrawer
        // maskClosable={true}
        // placement='right'
        visible={visible}
        onClose={onClose}
        width={'calc(100vw - 256px)'}
      >
        <div>content</div>
      </QuiDrawer>
    </>
  );
};
```

## 按需加载

`qiji`的 JS 代码默认支持基于 ES modules 的 tree shaking
