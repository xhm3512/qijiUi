---
title: Drawer 抽屉
group:
  title: 反馈
  order: 5
---
# Drawer 抽屉
## 代码演示
### 基础用法：

```tsx
import React, { useState } from 'react';
import { QuiDrawer,QuiButton } from 'qiji';
import Drawer from 'rc-drawer';
export default () => {
  const [visible, setVisible] = useState(false); // 弹窗是否可见,默认不可见,点击按钮后弹窗出现
  const onClick = () => {
    setVisible(!visible);
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
      handler={false}
      keyboard={true}
        // maskClosable={true}
        // placement='right'
        visible={visible}
        onClose={onClose}
        width={'200px'}
      >
        <div>content</div>
      </QuiDrawer>
    </>
  );
};
```

### 自定义位置：

```tsx
import React, { useState } from 'react';
import { QuiDrawer,QuiButton,QuiRadio } from 'qiji';
const {QuiGroup}=QuiRadio;
export default  () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <div>
        <QuiGroup value={placement} onChange={onChange}>
          <QuiRadio value="top">top</QuiRadio>
          <QuiRadio value="right">right</QuiRadio>
          <QuiRadio value="bottom">bottom</QuiRadio>
          <QuiRadio value="left">left</QuiRadio>
        </QuiGroup>
          <br/>
        <QuiButton type="primary" onClick={showDrawer}>
          Open
        </QuiButton>
      </div>
    
      <QuiDrawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </QuiDrawer>
      </>
  );
};
```
## API
参照：https://ant.design/components/drawer-cn/#components-drawer-demo-multi-level-drawer 和 https://www.npmjs.com/package/rc-checkbox
