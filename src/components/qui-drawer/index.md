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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点 | boolean | true | 4.17.0 |
| afterVisibleChange | 切换抽屉时动画结束后的回调 | function(visible) | - |  |
| bodyStyle | 可用于设置 Drawer 内容部分的样式 | CSSProperties | - |  |
| className | 对话框外层容器的类名 | string | - |  |
| closable | 是否显示左上角的关闭按钮 | boolean | true |  |
| closeIcon | 自定义关闭图标 | ReactNode | &lt;CloseOutlined /> |  |
| contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式 | CSSProperties | - |  |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
| drawerStyle | 用于设置 Drawer 弹出层的样式 | CSSProperties | - |  |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 |
| footer | 抽屉的页脚 | ReactNode | - |  |
| footerStyle | 抽屉页脚部件的样式 | CSSProperties | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| getContainer | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| headerStyle | 用于设置 Drawer 头部的样式 | CSSProperties | - |  |
| height | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 378 |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| maskStyle | 遮罩样式 | CSSProperties | {} |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px` | 'default' \| 'large' | 'default' | 4.17.0 |
| style | 可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| visible | Drawer 是否可见 | boolean | - |  |
| width | 宽度 | string \| number | 378 |  |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |  |


参照：https://ant.design/components/drawer-cn/#components-drawer-demo-multi-level-drawer 和 https://www.npmjs.com/package/rc-checkbox
