---
hero:
  title: qiji
  desc: qiji example
  actions:
    - text: Getting Started
      link: /files
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 高效
    desc: 高效
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 便捷
    desc: 便捷
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 速度
    desc: 速度
footer: Open-source MIT Licensed | Copyright © 2021<br />Powered by xhm
---

## 轻松上手

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
