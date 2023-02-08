---
title: Dropdown 下拉菜单
group:
  title: 导航
  order: 3
---

## Dropdown下拉菜单
向下弹出的列表。
### 何时使用
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

用于收罗一组命令操作。
Select 用于选择，而 Dropdown 是命令集合。


#### 代码演示:
##### 基本用法

```tsx
import React from 'react';
import { QuiDropdown,QuiButton } from 'qiji';

const items = [
  {
    key: '1',
    label: (
     '    1st menu item'
    ),
  },
  {
    key: '2',
    label: (
     '  2nd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
    '3rd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export default (ee,rr,dd) => {
  const onVisibleChange=()=>{
    console.log('hover')
  }
  return (
  <QuiDropdown 
  menu={items} 
  onVisibleChange={onVisibleChange}
  >
    <QuiButton>Hover me</QuiButton>
  </QuiDropdown>
)
};

```
##### 弹出位置 支持 6 个弹出位置。
属性说明如下：
```tsx
import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { QuiDropdown,QuiButton } from 'qiji';
const items = [
  {
    key: '1',
    label: (
     '    1st menu item'
    ),
  },
  {
    key: '2',
    label: (
     '  2nd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
    '3rd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export default () => (
  <div >
    <div >
      <QuiDropdown menu={items} placement="bottomLeft">
        <QuiButton>bottomLeft</QuiButton>
      </QuiDropdown>&nbsp;
      <QuiDropdown menu={items} placement="bottomCenter">
        <QuiButton>bottomCenter</QuiButton>
      </QuiDropdown>&nbsp;
      <QuiDropdown menu={items} placement="bottomRight">
        <QuiButton>bottomRight</QuiButton>
      </QuiDropdown>
    </div>
    &nbsp;
    <div >
      <QuiDropdown menu={items} placement="topLeft">
        <QuiButton>topLeft</QuiButton>
      </QuiDropdown>&nbsp;
      <QuiDropdown menu={items} placement="topCenter">
        <QuiButton>topCenter</QuiButton>
      </QuiDropdown>&nbsp;
      <QuiDropdown menu={items} placement="topRight">
        <QuiButton>topRight</QuiButton>
      </QuiDropdown>
    </div>
  </div>
);

```
##### 触发方式
默认是移入触发菜单，可以点击触发。
```tsx
import React from 'react';
import { QuiDropdown,QuiButton } from 'qiji';

const items = [
  {
    key: '1',
    label: (
     '    1st menu item'
    ),
  },
  {
    key: '2',
    label: (
     '  2nd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
    '3rd menu item (disabled)'
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export default (ee,rr,dd) => {
  const onVisibleChange=()=>{
    console.log('click')
  }
  return (
  <QuiDropdown 
  
  menu={items} 
  trigger={['click']}
  onVisibleChange={onVisibleChange}
  // visible
  >
    <QuiButton>Click me</QuiButton>
  </QuiDropdown>
)
};

```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| overlay | 菜单 | [Menu](/components/menu) \| () => Menu | - |  |
| overlayClassName | 下拉根元素的类名称 | string | - |  |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| visible | 菜单是否显示 | boolean | - |  |
| onVisibleChange | 菜单显示状态改变时调用，参数为 `visible`。点击菜单按钮导致的消失不会触发 | (visible: boolean) => void | - |  |

`overlay` 菜单使用 [Menu](/components/menu/)，还包括菜单项 `Menu.Item`，分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。
>
> Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`。
>
> 其他api参照：https://www.npmjs.com/package/rc-dropdown
