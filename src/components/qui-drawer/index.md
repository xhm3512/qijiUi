---
title: Drawer 抽屉
group:
  title: 反馈
  order: 9
---
## Drawer 抽屉
Demo:

```tsx
import React, { useState } from 'react';
import { QuiDrawer } from 'qiji';
export default () => {
  const [visible, setVisible] = useState(true); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div onClick={onClick}>qwqw11</div>
      <QuiDrawer
        maskClosable={true}
        visible={visible}
        onClose={onClick}
        className="demo-box"
      >
        <div>44</div>
      </QuiDrawer>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
