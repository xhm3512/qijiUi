---
title: Drawer 抽屉
group:
  title: 反馈
  order: 9
---

Demo:

```tsx
import React, { useState } from 'react';
import { QuiDrawer, Listen } from 'qiji';
export default () => {
  const [visible, setVisible] = useState(true); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div onClick={onClick}>qwqw</div>
      <QuiDrawer maskClosable={true} visible={visible} onClose={onClick}>
        <Listen onCloseClick={onClick} />
      </QuiDrawer>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
