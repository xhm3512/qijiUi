---
title: 快速上手
order: 2
---

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

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

