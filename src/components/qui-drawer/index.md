---
title: Drawer 抽屉
group:
  title: 反馈
  order: 5
---
## Drawer 抽屉
Demo:

```tsx
import React, { useState } from 'react';
import { QuiDrawer } from 'qiji';
export default () => {
  const [visible, setVisible] = useState(false); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div onClick={onClick}>drawer</div>
      <QuiDrawer
        maskClosable={true}
        visible={visible}
        onClose={onClick}
        className="demo-box"
      >
        <div>content</div>
      </QuiDrawer>
    </>
  );
};
```

